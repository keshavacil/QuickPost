import LoginPage from "@/components/LoginPage";
import { checkAuthToken } from "@/components/utils/authUtils";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const authCheck = async () => {
      const isAuthenticated = await checkAuthToken();

      if (
        !isAuthenticated &&
        router.pathname !== "/login" &&
        router.pathname !== "/"
      ) {
        router.push("/login");
      }
    };

    authCheck();
  }, [router]);
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
