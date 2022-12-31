import clsx from 'clsx';
import { FC, ReactNode, LiHTMLAttributes } from 'react';

import "./style.scss";

type TDiv = LiHTMLAttributes<HTMLDivElement>;
interface IIconWrapperProps extends TDiv {
    label?: string;
    icon: ReactNode;
    color?: string;
}

export const IconWrapper: FC<IIconWrapperProps> = ({ label, icon, color, ...props }) => {

    const _rootClass = clsx(
        "IconWrapper-container",
        props?.className
    );


    return (
        <div
            className={_rootClass}
            {...props}
        >
            <div
                style={{ backgroundColor: color }}
                className="IconWrapper-container__icon"
            >
                {icon}
            </div>
            {label && <p>{label}</p>}
        </div>
    );
}
