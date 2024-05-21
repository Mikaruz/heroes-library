import { types } from "../types/types";

interface Action {
  type: string;
  payload: {
    id: string;
    name: string;
  };
}

export const authReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
