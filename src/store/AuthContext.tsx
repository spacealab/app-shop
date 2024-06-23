import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { UserType } from "@/types/api/Auth";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  isLogin: boolean;
  login: (jwt: string, user: UserType) => void;
}

const AuthContext = createContext<AuthContextType>({ isLogin: false, login: () => {} });

export const useUser = () => useContext(AuthContext);

export function AuthContextProvider({ children }: Props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
        setIsLogin(true)
    }
}, [])

  const loginHandler = (jwt: string, user: UserType): void => {
    window.localStorage.setItem('token', jwt);
    window.localStorage.setItem('user', JSON.stringify(user));
    setIsLogin(true);
  };

  return (
    <AuthContext.Provider value={{ isLogin: isLogin, login: loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
}