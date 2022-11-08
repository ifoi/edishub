import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

export default function AuthContent({ children }: { children: ReactNode }) {
  const { loggedIn, loading } = useAuth();
  const router = useRouter();

  // // Navigate unauthenticated users to Log In page.
  // useEffect(() => {
  //   if (!loading && !loggedIn) {
  //     router.push('/'); // redirect to Home for now
  //   }
  // }, [loggedIn, loading, router]);

  // if (loggedIn) {
    return <>{children}</>;
  // }

  return <p>Loading...</p>;
}