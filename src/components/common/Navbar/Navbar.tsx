//libraries
import { useNavigate } from "react-router-dom";

//components
import { ListItem } from "./components";
import { Button } from "components/common";
import { LogoutIcon, MenuIcon, UserIcon } from "icons";

//utils & hooks
import { navigationItems } from "./utils";
import { useClickOutside, useUser } from "hooks";

import "./style.scss";


export const Navbar = () => {

    const navigate = useNavigate()
    const { user, logout } = useUser()

    const { ref: menuRef, clickToVisible, isVisible } = useClickOutside()


    return (
        <nav className="header">

            <div className="header__menu-icon" ref={menuRef} onClick={clickToVisible} >
                <MenuIcon />
            </div>

            <img src="images/logo.svg" alt="iranian-pooshesh-logo" className="header__logo" />

            <ul className={isVisible ? "header__navbar show":"header__navbar"}>
                {navigationItems.map(item => (
                    <ListItem
                        key={item.id}
                        title={item.title}
                        icon={item?.icon}
                        path={item.path}
                    />
                ))}
            </ul>

            <div className="header__user">
                {!!user ? (
                    <>
                        <Button startIcon={<UserIcon />}>اکرم مکرم</Button>
                        <Button onClick={logout} startIcon={<LogoutIcon />}>خروج</Button>
                    </>
                ) : (
                    <Button onClick={() => navigate("/auth")} startIcon={<LogoutIcon />}>ورود</Button>
                )}
            </div>
        </nav>
    )
}