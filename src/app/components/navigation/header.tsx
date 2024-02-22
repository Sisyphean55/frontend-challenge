import styles from '../../page.module.css'
import Image from 'next/image'


const Navbar = () => {
    return (
        <>
          <nav className={styles.navbar}>
            <div className={styles.imageWrapper}>
              <Image src='/Menu.svg' fill alt="Menu"  className={styles.menuIcon} priority/>

            </div>
            <div className={styles.imageWrapper}>
              <Image src='/Search.svg' fill alt="Search"  className={styles.searchIcon} priority />

            </div>
            <div className={styles.imageWrapper}>
              <Image src='/Logo.svg' fill alt="TiendaAnimal"  className={styles.logo} priority />

            </div>
            <div className={styles.imageWrapper}>
              <Image src='/Login.svg' fill  alt="Account"  className={styles.accountIcon} priority />

            </div>
            <div className={styles.imageWrapper}>
              <Image src='/Cart.svg' fill alt="Cart"  className={styles.cartIcon} priority />
            </div>
          </nav>
        </>
    )
}
export default Navbar