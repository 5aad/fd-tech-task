import React, { createContext, useContext, useReducer } from "react";
import { StateContextProps, GlobalContextProviderProps } from "./types";

export const StateContext = createContext<StateContextProps | undefined>(
  undefined
);

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  reducer,
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = (): StateContextProps => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateValue must be used within a StateContextProvider");
  }
  return context;
};