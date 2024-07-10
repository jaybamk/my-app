import Image from "next/image";
import styles from './styles.module.scss';
import routes from "@/routes";



export function Header() {
    const date = new Date();
    return <>
    <header className={`w-100 position-fixed ${styles.header}`}> 
            <nav className={`w-100 d-flex justify-content-between`}>
                <div>
                    <Image src="/vercel.svg" alt="logo" width={72} height={16}  />
                </div>
                <ul className= {`d-flex list-unstyled justify-content-around`}>
                    <li><a href={routes.home}>home</a></li>
                    <li><a href={routes.Contact}>about</a></li>
                    <li><a href={routes.support}>support</a></li>
                    <li><a href="/auth/signin">{date.toISOString()} </a></li>
                </ul>
            </nav>
        
    </header>
    
    </>
}