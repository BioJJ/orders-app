"use client";

import { jwtDecode } from "@/lib/jwt";
import { Session, SignIn } from "@/services/models/auth.types";

import { removeLocalStorage, setLocalStorage } from "@/utils/localStorage";
import {
  getSessionStorage,
  removeSessionStorage,
  setSessionStorage
} from "@/utils/sessionStorage";

import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

import { destroyCookie, setCookie } from "nookies";

type AuthContextType = {
  session?: Session;
  signOut: () => void;
  handleSetSession: (res: SignIn) => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({
  children
}: Readonly<AuthContextProviderProps>) {
  const { replace, refresh } = useRouter();
  const [session, setSession] = useState<Session | undefined>(() =>
    getSessionStorage("session")
  );

  const handleSetSession = useCallback((res: SignIn) => {
    const jwtPayload = jwtDecode(res.access_token);
    const expiresIn = new Date(jwtPayload.exp ? jwtPayload.exp * 1000 : 0);

    setSession({
      user: res,
      expires: expiresIn
    });
    setSessionStorage("session", {
      user: res,
      expires: expiresIn
    });
    setCookie(undefined, "app-access_token", res.access_token, {
      expires: expiresIn,
      path: "/"
    });
  }, []);

  const signOut = useCallback(async () => {
    replace("/auth/login");
    destroyCookie(undefined, "app-access_token", { path: "/" });
    removeSessionStorage("session");
    setSession(undefined);
  }, [replace]);

  useEffect(() => {
    setLocalStorage("TEMP", Date.now().toString());
    removeLocalStorage("TEMP");
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo(
    () => ({
      session,
      signOut,
      handleSetSession
    }),
    [session, signOut, handleSetSession]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
