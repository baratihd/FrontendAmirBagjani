//libraries
import { Navigate } from "react-router-dom";
import { FC, ReactNode, Suspense } from "react";

//hook
import { useUser } from "hooks";


interface IPage {
  children: ReactNode;
  protect?: boolean;
  loginProtect?: boolean;
}


export const SuspensePage: FC<IPage> = ({ children, protect, loginProtect }) => {

  const { user } = useUser();

  if (protect && !!!user) return <Navigate to="/auth" replace />

  if (loginProtect && !!user) return <Navigate to="/" replace />

  return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
}