import { User } from "models";
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

const client = axios.create({ baseURL: "http://5.253.27.176" });
// const client = axios.create({ baseURL: "http://localhost:8000" });

export const request = <Data, Error>({ ...options }: AxiosRequestConfig) => {

  const token = JSON.parse(localStorage.getItem("iranian-token") || "")
  if (!!token) {
    const access = (token as User).access;
    client.defaults.headers.common.Authorization = `Bearer ${access}`;
  }

  const onSuccess = (response: AxiosResponse<Data>) => Promise.resolve(response.data);

  const onError = (error: AxiosError<Error>) => Promise.reject(error.response?.data)

  return client(options).then(onSuccess).catch(onError)
};