'use client'
import RegistrationForm from "../components/forms/registrationForm";
import styles from '../page.module.css'
export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.headline}>
        <h2>Mis datos</h2>
      </div>
      <RegistrationForm />
    </main>
  );
}
