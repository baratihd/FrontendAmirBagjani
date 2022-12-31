import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface IListItemProps {
    icon?: ReactNode;
    title: string;
    path: string;
}

export const ListItem: FC<IListItemProps> = ({ icon, title, path }) => {
    return (
        <li className="header__navbar--list">
            <NavLink to={path}>{icon}<span>{title}</span></NavLink>
        </li>
    )
}