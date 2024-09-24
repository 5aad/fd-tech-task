import React, { Dispatch, ReactNode } from "react";
import { Location } from "../Map/types";
export interface State {
  isLocation: Location;
}

export interface Action {
  type: string;
  isLocation?: Location;
}

export interface StateContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export interface GlobalContextProviderProps {
  reducer: React.Reducer<State, Action>;
  initialState: State;
  children: ReactNode;
}
