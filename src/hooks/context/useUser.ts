import { useContext } from "react";
import { UserContext } from "context";

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw Error('useUser must be used inside an UserProvider')
    }

    return context;
}