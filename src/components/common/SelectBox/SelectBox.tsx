import clsx from 'clsx';
import React, { CSSProperties, forwardRef, SelectHTMLAttributes } from 'react';

import "./style.scss";

type Ref = HTMLSelectElement;
type InputProps = SelectHTMLAttributes<HTMLSelectElement>;
type Option = { value: any; label: string }

interface ISelectBox extends Omit<InputProps, "className" | "style" | "required"> {
    label?: string;
    required?: boolean;
    isError?: boolean;
    errorMsg?: string;
    className?: string;
    style?: CSSProperties;
    inputClassName?: string;
    options: Option[] | undefined
}

export const SelectBox = forwardRef<Ref, ISelectBox>((props, ref) => {
    const { options, label, required, isError, errorMsg, className, style, inputClassName, ...rest } = props;

    const _rootClass = clsx(
        "select-form-control",
        {
            ["select-form-control--disable"]: rest.disabled,
            ["select-form-control--error"]: isError,
        },
        className
    );

    const _inputClass = clsx(
        "select-form-control__input",
        inputClassName
    );

    const _labelClass = clsx(
        "select-form-control__label",
        { ["select-form-control__label--required"]: required }
    );


    return (
        <div className={_rootClass} style={style}>
            <label>
                <span className={_labelClass}>{label}</span>
                <select
                    {...rest}
                    ref={ref}
                    className={_inputClass}
                    defaultValue={!!rest.placeholder ? "placeholder*" : rest.placeholder}
                >
                    {!!rest.placeholder && <option value="placeholder*" disabled hidden>{rest.placeholder}</option>}
                    {React.Children.toArray(
                        options?.map(item => (
                            <option className='select-form-control__options' value={item.value}>{item.label}</option>
                        ))
                    )}
                </select>
            </label>
            {!!isError && <span className='select-form-control__error'>{errorMsg}</span>}
        </div>
    )
})