import { createContext, useContext, useState } from "react";

const INITAL_VALUE = {
  accesToken: null,
  email: null,
};

const Context = createContext(INITAL_VALUE);

export const useContextHook = () => useContext(Context);

// eslint-disable-next-line react/prop-types
export default function ContextProvider({ children }) {
  const [state, setState] = useState(INITAL_VALUE);

  return (
    <Context.Provider value={{ ...state, setState }}>
      {children}
    </Context.Provider>
  );
}
