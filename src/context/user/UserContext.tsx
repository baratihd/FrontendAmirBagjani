import { User } from "models";
import { useLocalstorageState } from "hooks";
import { createContext, FC, ReactNode, useCallback } from "react";

interface IUserProviderProps {
    children: ReactNode;
}


//implement user context
const useUser = () => {
    const [user, _setUser] = useLocalstorageState<User | null>("iranian-token", null);

    const setUser = useCallback(_setUser, [_setUser])
    const logout = useCallback(() => _setUser(null), [_setUser])

    return {
        user,
        setUser,
        logout
    }
}
type UseUserType = ReturnType<typeof useUser>


export const UserContext = createContext({} as UseUserType);

export const UserProvider: FC<IUserProviderProps> = ({ children }) => (
    <UserContext.Provider value={useUser()}>
        {children}
    </UserContext.Provider>
)