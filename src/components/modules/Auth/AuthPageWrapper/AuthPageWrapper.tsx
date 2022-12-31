//libraries
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from "react-hook-form";

//components
import { Button, InputField } from "components/common";

//models & utils & hooks
import { Auth } from "models";
import { useUser } from 'hooks';
import { useLoginAPI } from '../hooks';
import { authValidation } from "../utils";

import "./style.scss"


export const AuthPageWrapper = () => {

    const navigate = useNavigate()
    const { setUser } = useUser()

    const { mutate: login, isLoading } = useLoginAPI()

    const { control, handleSubmit, formState: { errors } } = useForm<Auth>({
        resolver: yupResolver(authValidation),
        defaultValues: {
            username: "",
            password: "",
        }
    })


    const onSubmit: SubmitHandler<Auth> = (data) => {
        login(data, {
            onError: (e) => alert(e.detail),
            onSuccess: (data) => {
                setUser(data)
                navigate("/")
            }
        });
    }



    return (
        <main className="login-page">
            <div className="login-page__form">
                <img
                    onClick={() => navigate("/")}
                    className="login-page__form--logo"
                    src="/images/logo.svg" alt="iranian-pooshesh-logo"
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                required
                                label="نام کاربری:"
                                placeholder="نام کاربری خود را وارد کنید"
                                className="login-page__form--inputfield"
                                inputClassName="login-page__form--input"
                                isError={!!errors.username}
                                errorMsg={errors.username?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                required
                                label="رمزعبور:"
                                placeholder="رمزعبور خود را وارد کنید"
                                className="login-page__form--inputfield"
                                inputClassName="login-page__form--input"
                                isError={!!errors.password}
                                errorMsg={errors.password?.message}
                            />
                        )}
                    />
                    <Button
                        isLoading={isLoading}
                        disabled={isLoading}
                        loadingElement="صبرکنید..."
                        variant="contained"
                        className="login-page__form--button"
                    >
                        ورود
                    </Button>
                </form>
                <p className="credit">&copy; ایرانیان پوشش</p>
            </div>
        </main>
    )
}