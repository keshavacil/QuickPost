import { checkAuthToken } from "@/components/utils/authUtils";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";  

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const authCheck = async () => {
      const isAuthenticated = await checkAuthToken();
      if (!isAuthenticated && router.pathname !== "/login") {
        router.push("/login");
      }
      setIsLoading(false); 
    };

    authCheck();
  }, [router]);

  if (isLoading) {
    return (
      <div className="fullscreen-loader">
        <DotLoader size={150} color={"#36D7B7"} loading={isLoading} />
      </div>
    );
  }

  return <Component {...pageProps} />;
}
