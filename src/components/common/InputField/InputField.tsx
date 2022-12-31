import clsx from 'clsx';
import { CSSProperties, forwardRef, InputHTMLAttributes } from 'react';

import "./style.scss";

type Ref = HTMLInputElement;
type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface IInputField extends Omit<InputProps, "className" | "style" | "required"> {
    label?: string;
    required?: boolean;
    isError?: boolean;
    errorMsg?: string;
    className?: string;
    style?: CSSProperties;
    inputClassName?: string;
}

export const InputField = forwardRef<Ref, IInputField>((props, ref) => {
    const { label, required, isError, errorMsg, className, style, inputClassName, ...rest } = props;

    const _rootClass = clsx(
        "form-control",
        {
            ["form-control--disable"]: rest.disabled,
            ["form-control--error"]: isError,
        },
        className
    );

    const _inputClass = clsx(
        "form-control__input",
        inputClassName
    );

    const _labelClass = clsx(
        "form-control__label",
        { ["form-control__label--required"]: required }
    );


    return (
        <div className={_rootClass} style={style}>
            <label>
                <span className={_labelClass}>{label}</span>
                <input
                    {...rest}
                    ref={ref}
                    className={_inputClass}
                />
            </label>
            {!!isError && <span className='form-control__error'>{errorMsg}</span>}
        </div>
    )
})