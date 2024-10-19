import React from "react";
import SlashRouter from "./SlashRouter";
export const AuthContext = React.createContext<{
  userData: UserData | undefined;
  setUserData: (newData: UserData) => void;
}>({ userData: undefined, setUserData: (temp) => {} });

export type UserData = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
};

export default function ContextWrapper() {
  const [userData, setUserData] = React.useState<UserData | undefined>(
    undefined
  );
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      <SlashRouter />
    </AuthContext.Provider>
  );
}
