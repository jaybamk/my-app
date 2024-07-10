import Image from "next/image";
import styles from "@/app/page.module.scss";
import { Header } from "@/components/header/index";
import link from "next/link";

export default function ContactUs() { 
  return ( 

    <main className={styles.main}>
      <Header/>
     <div className="div">
      My Next.js App contact page
     </div>
     <div style={{width:200, height:200}}>
      This is another text line
     </div>
     <div>
      <a href="/">home</a>
      </div>

    </main>
  );

}
