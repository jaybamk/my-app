export function Header() {
    const date = new Date();
    return <>
    <header>
            <nav>
                <div>
                    <img src="/vercel.svg" alt="logo" />
                </div>
                <ul>
                    <li><a href="/home">home</a></li>
                    <li><a href="about"></a>about</li>
                    <li><a href="/auth/signin">signin</a></li>
                    <li><a href="/auth/signin">{date.toISOString()}</a></li>
                </ul>
            </nav>
        
    </header>
    
    </>
}