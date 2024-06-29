import styles from './styles.module.scss'

export function Footer() {
    const date = new Date();
    return <>
    <footer className= {`w-100 d-flex ${styles.myLinks}`}>
            <div>
                welcome here!
                <div>
                    <ul>
                        <li>
                            <a href="/support">support</a>
                            <a href="/customer">customer</a>
                            <a href="/client">client</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <ul>
                    <li><a href="">Master</a></li>
                    <li><a href="">Steward</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="">Student</a></li>
                    <li><a href="">Learning</a></li>
                </ul>
            </div>
        
    </footer>
    
    </>
}