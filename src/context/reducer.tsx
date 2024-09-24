import { State, Action } from "./types";

export const initState: State = {
  isLocation: {
    id: 0,
    name: "",
    description: "",
    coordinates: [0, 0],
  },
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_LOC":
      return {
        ...state,
        isLocation: action.isLocation ?? state.isLocation,
      };

    default:
      return state;
  }
};

export default reducer;
