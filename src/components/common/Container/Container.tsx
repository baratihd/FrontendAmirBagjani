import clsx from "clsx";
import { FC, LiHTMLAttributes } from "react";

import "./style.scss";


type TDiv = LiHTMLAttributes<HTMLDivElement>;

export const Container: FC<TDiv> = (props) => {

    const _rootClass = clsx(
        "div-container",
        props?.className
    );

    return <div className={_rootClass} {...props} />
}
