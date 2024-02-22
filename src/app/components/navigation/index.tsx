import Navbar from "./header";
import Menu from "./menu";
import styles from "../../page.module.css"

const Navigation = () => {
    return (
      <>
         <header className={styles.header}>
            <Navbar></Navbar>
            <Menu></Menu>
         </header>
      </>
    );
  };
  
  export default Navigation;