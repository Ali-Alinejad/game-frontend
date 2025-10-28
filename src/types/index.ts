export type Theme = "light" | "dark";

export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: "user" | "admin";
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: User;
  token?: string;
}
