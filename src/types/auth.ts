export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  hashPassword: string;
  image: string;
  bio: string;
}

export interface AuthStore {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User) => void;
}
