import { Inter } from "next/font/google";
import Count from "./components/contador";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Count />
    </>
  );
}
