import Image from "next/image";
import styles from "./page.module.scss";
import { Header } from "@/components/header/index";
import { Footer } from "@/components/footer/index";

export default function Home() {
  return (
    <main className={styles.main}>
     <Header/>

     <div className="div">
      My Next.js App
     </div>

     <img src="/next.svg" alt="my image" />
     <div>
      <p className={styles.myLink}>
      <a href="/home">Home</a>
      </p>
      <p>
      <a href="/contact">About Us</a>
      </p> 
     </div>

<Footer/>
    </main>
  );
}
