import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Home from "../components/Home";

export default function Main() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, [router]);
  return <></>;
}
