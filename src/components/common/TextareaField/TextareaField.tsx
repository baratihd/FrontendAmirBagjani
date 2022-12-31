import clsx from 'clsx';
import { CSSProperties, forwardRef, TextareaHTMLAttributes } from 'react';

import "./style.scss";

type Ref = HTMLTextAreaElement;
type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

interface ITextareaField extends Omit<InputProps, "className" | "style" | "required"> {
    label?: string;
    required?: boolean;
    isError?: boolean;
    errorMsg?: string;
    className?: string;
    style?: CSSProperties;
    inputClassName?: string;
}

export const TextareaField = forwardRef<Ref, ITextareaField>((props, ref) => {
    const { label, required, isError, errorMsg, className, style, inputClassName, ...rest } = props;

    const _rootClass = clsx(
        "textarea-form-control",
        {
            ["textarea-form-control--disable"]: rest.disabled,
            ["textarea-form-control--error"]: isError,
        },
        className
    );

    const _inputClass = clsx(
        "textarea-form-control__input",
        inputClassName
    );

    const _labelClass = clsx(
        "textarea-form-control__label",
        { ["textarea-form-control__label--required"]: required }
    );


    return (
        <div className={_rootClass} style={style}>
            <label>
                <span className={_labelClass}>{label}</span>
                <textarea
                    {...rest}
                    ref={ref}
                    className={_inputClass}
                />
            </label>
            {!!isError && <span className='textarea-form-control__error'>{errorMsg}</span>}
        </div>
    )
})