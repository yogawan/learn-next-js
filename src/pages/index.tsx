import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import HomePages from "@/components/pages/HomePages";

export default function Home() {
  return (
    <div>
      <HomePages></HomePages>
    </div>
  );
};