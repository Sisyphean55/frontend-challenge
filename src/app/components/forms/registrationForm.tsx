import styles from '../../page.module.css'
import { useState } from 'react'
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")

    const handleInput = (e: any) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e: any) => {
        e.preventDefault()
        const formURL = e.target.action
        var data = { name: formData.name, email: formData.email, phone: formData.phone }
        fetch(formURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.status >= 400) {
                throw new Error()
            }
            return response.json();
        })
            .then((data) => {
                setFormData({
                    name: "",
                    email: "",
                    phone: ""
                })
                setFormSuccess(true)
                setFormSuccessMessage(data.message)
            })

        //TODO Validations
    }
    return (
        <>
            <form method='POST' action="https://jsonplaceholder.typicode.com/users" className={styles.userForm} onSubmit={submitForm}>
                <div className={styles.inputForm}>
                    <label htmlFor="name" className={styles.formLabel}>Nombre <span className={styles.error}>*</span></label>
                    <input type="text" name='name' className={styles.formInput} onChange={handleInput} placeholder='Nombre' />
                </div>
                <div className={styles.inputForm}>
                    <label htmlFor="email" className={styles.formLabel}>Email <span className={styles.error}>*</span></label>
                    <input type="email" name='email' className={styles.formInput} onChange={handleInput} placeholder='Email' />
                </div>
                <div className={styles.inputForm}>
                    <label htmlFor="phone" className={styles.formLabel}>Teléfono <span className={styles.error}>*</span></label>
                    <input type="text" name='phone' className={styles.formInput} onChange={handleInput} placeholder='Teléfono' />
                </div>
                <button type='submit' className={`${styles.formButton} ${openSans.className}`} >Guardar</button>
            </form>
        </>
    )
}


