import { User } from "@/types/user";

const STORAGE_KEY = "auth_user";

export function setUser(user: User) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as User) : null;
}

export function clearUser() {
  localStorage.removeItem(STORAGE_KEY);
}
