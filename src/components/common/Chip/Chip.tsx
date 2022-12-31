import clsx from 'clsx';
import { FC, LiHTMLAttributes } from 'react';

import "./style.scss";

type TDiv = LiHTMLAttributes<HTMLDivElement>;


export const Chip: FC<TDiv> = (props) => {

    const _rootClass = clsx(
        "chip-component",
        props?.className
    );


    return (
        <div className={_rootClass} {...props} />
    )
}
