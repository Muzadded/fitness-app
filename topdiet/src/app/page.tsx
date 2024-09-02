"use client"
import Image from "next/image";
import styles from "./page.module.css";
import HomePage1 from "@/components/HomePage1/HomePage1";
import HomePage2 from "@/components/HomePage2/HomePage2";
import { use } from "react";

export default function Home() {
  return (

    <main className={styles.main}>
      <HomePage1/>
      <HomePage2/>
    </main>
    
  );
}
