import { request } from "utils";
import { Auth, User, AuthError } from "models";
import { useMutation, UseMutationOptions } from "react-query";

type Param = Auth
type Options = Omit<
    UseMutationOptions<User, AuthError, Param, unknown>,
    'mutationFn'
>;

const loginUser = (data: Param) => request<User, AuthError>({
    url: "/api/token/",
    method: "post",
    data,
});

export const useLoginAPI = (
    options: Options = {}
) => useMutation<User, AuthError, Param>(loginUser, options)