import { useEffect, type PropsWithChildren } from "react";

import { supabase } from "@/shared/api/supabase";

import { useAuthStore } from "@/features/auth/model/auth-store";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(
        user
          ? {
              id: user.id,
              email: user.email ?? "",
            }
          : null,
      );

      setLoading(false);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(
        session?.user
          ? {
              id: session.user.id,
              email: session.user.email ?? "",
            }
          : null,
      );
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setLoading, setUser]);

  return children;
};