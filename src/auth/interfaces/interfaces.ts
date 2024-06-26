export interface User {
  id: number;
  name: string;
}

export interface AuthState {
  logged: boolean;
  user?: User;
}
