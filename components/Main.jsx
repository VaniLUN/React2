import Link from 'next/link';
import styles from '../styles/main.module.css'
export default function Main(){
    return(
        <div id={styles.main}>
            <div id={styles.navigation}>
            <Link className={styles.button} href="/">Главная</Link>
            <Link className={styles.button} href="/game">Игра</Link>
            <Link className={styles.button} href="/about">О нас</Link>
            </div>
        </div>
    )
}