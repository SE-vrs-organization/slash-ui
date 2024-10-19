import React from "react";
import SlashRouter from "./SlashRouter";
import Navigation from "./components/Navigation/Navigation";
export const AuthContext = React.createContext<{
  userData: UserData | undefined;
  setUserData: (newData: UserData | undefined) => void;
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
      <Navigation />
      <SlashRouter />
    </AuthContext.Provider>
  );
}
