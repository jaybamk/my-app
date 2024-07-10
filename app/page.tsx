import Image from "next/image";
import styles from "./page.module.scss";
import { Header } from "@/components/header/index";
import { Footer } from "@/components/footer/index";
import routes from "@/routes";

export default function Home() {
  return (
    <main className={styles.main}>
     <Header/>

     <div className="div">
      My Next.js App
     </div>

     <img src="/next.svg" alt="my image" style={{width:200, height:2000}} />
     <div>
      <a href={routes.Contact}> Contact
     </a>
      <p className={styles.myLink}>
       <a href="/support/">support</a>  
        </p> 
      { /* <p>
      <a href={routes.Contact}>contact</a>
      </p> */ } 
     </div>





<Footer/>
    </main>
  );
}
