import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(false);
  return (
    <LoginContext.Provider
      value={{
        loginData,
        setLogin: (data) => {
          setLoginData(data)
        }
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => {
  return useContext(LoginContext);
};

export { LoginProvider, useLogin, LoginContext };
