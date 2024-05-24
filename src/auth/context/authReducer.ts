import { AuthState, User } from "../interfaces/interfaces";

type AuthAction =
  | {
      type: "login";
      payload: User;
    }
  | {
      type: "logout";
    };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case "logout":
      return {
        logged: false,
      };

    default:
      return state;
  }
};
