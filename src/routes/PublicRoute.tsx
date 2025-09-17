import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode;
}

export const PublictRoute = ({ children }: Props) => {
    const isAuth = !!localStorage.getItem("token");

    return !isAuth ? <>{children}</> : <Navigate to={'/'} />
}