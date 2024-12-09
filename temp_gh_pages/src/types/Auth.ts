export interface Admin {
  username: string;
  password: string;
}

export interface AuthStore {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}