import { request } from "utils";
import { FormError, Form } from "models";
import { useMutation, UseMutationOptions } from "react-query";


type Param = Form
type Options = Omit<
    UseMutationOptions<Form, FormError, Param, unknown>,
    'mutationFn'
>;

const sendForm = (data: Param) => request<Form, FormError>({
    url: "/portal/adjuster/98/visit/",
    method: "post",
    data,
});


export const usePostFormAPI = (
    options: Options = {}
) => useMutation<Form, FormError, Param>(sendForm, options)
