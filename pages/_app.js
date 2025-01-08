import { checkAuthToken } from "@/components/utils/authUtils";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { use, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (!checkAuthToken()) {
      router.push("/login");
    }
  },[router]);

  return <Component {...pageProps} />;
}
