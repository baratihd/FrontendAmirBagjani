import clsx from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import "./style.scss";

type TVariant = "outlined" | "contained";
type TButton = ButtonHTMLAttributes<HTMLButtonElement>;

interface IButtonProps extends TButton {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
  isLoading?: boolean;
  loadingElement?: ReactNode;
  variant?: TVariant;
}

export const Button: FC<IButtonProps> = ({
  startIcon,
  endIcon,
  className,
  children,
  isLoading,
  loadingElement,
  variant,
  ...props
}) => {
  const _rootClass = clsx(
    "customButton",
    `customButton--${variant}`,
    {
      ["customButton--disable"]: props.disabled,
    },
    className
  );

  return (
    <button className={_rootClass} {...props}>
      {!isLoading && (
        <>
          {startIcon && <span className="startIcon">{startIcon}</span>}
          {children}
          {endIcon && <span className="endIcon">{endIcon}</span>}
        </>
      )}
      {isLoading && loadingElement}
    </button>
  );
};