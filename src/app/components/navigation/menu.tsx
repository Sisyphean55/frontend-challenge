"use client"
import styles from '../../page.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
    const pathname = usePathname();
    return (
        <menu className={styles.menu}>
            <div className={pathname === '/datos' ? styles.linkWrapperActive : styles.linkWrapper}>
                <Link href='/datos' className={pathname === '/datos' ? styles.linkActive : styles.link} >Mis Datos</Link>
            </div>
            <div className={pathname === '/tareas' ? styles.linkWrapperActive : styles.linkWrapper}>
                <Link href='/tareas' className={pathname === '/tareas' ? styles.linkActive : styles.link}>Mis tareas</Link>
            </div>
            <div className={pathname === '/devoluciones' ? styles.linkWrapperActive : styles.linkWrapper}>
                <Link href='/devoluciones' className={pathname === '/devoluciones'? styles.linkActive : styles.link}>Mis devoluciones</Link>
            </div>
            <div className={pathname === '/comunicaciones' ? styles.linkWrapperActive : styles.linkWrapper}>
                <Link href='/comunicaciones' className={pathname === '/comunicaciones' ? styles.linkActive : styles.link}>Mis comunicaciones</Link>
            </div>
            <div className={pathname === '/mascotas' ? styles.linkWrapperActive : styles.linkWrapper}>
                <Link href='/mascotas' className={pathname === '/mascotas' ? styles.linkActive : styles.link}>Mis mejores amigos</Link>
            </div>
        </menu>
    )
}

export default Menu;