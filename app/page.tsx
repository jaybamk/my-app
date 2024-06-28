import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
     <div className="div">
      My Next.js App
     </div>
     <table>
      <tr>
        <th>Country</th>
        <th>Capital</th>
      </tr>
      <tr>
        <td>Nigeria</td>
        <td>Lagos</td>
      </tr>
      <tr>
        <td>Canada</td>
        <td>Ottawa</td>
      </tr>
     </table>
    </main>
  );
}
