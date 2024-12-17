import { useEffect, useState } from "react";
import { get } from "../lib/api-client";
import { User } from "@/types/types";

export const useAuth = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const user = await get<User>("/auth/me");
      setUser(user);
    } catch (error) {
      setUser(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, isAuthenticated: !!user };
};
