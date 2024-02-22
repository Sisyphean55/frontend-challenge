import styles from '../../page.module.css'
import Image from 'next/image'
import { Open_Sans } from "next/font/google";
import { useState } from 'react';
import FormValidator from './formValidator';
import MessageBox from './messageBox';
const openSans = Open_Sans({ subsets: ["latin"] });

export default function ModalForm({ setIsOpen, taskList, handleAddTaskListChange }) {
    const [formData, setFormData] = useState({
        title: '',
        desc: ''
    })
    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("");
    const [formFailureMessage, setFormFailureMessage] = useState("");
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
        var data = { title: formData.title, desc: formData.desc };
        var errors = FormValidator(data);
        if (errors.length > 0) {
            setFormFailureMessage(errors[0].message);
            return;
        } else {
            setFormFailureMessage('');
        }
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
                    title: "",
                    desc: ""
                })
                setFormSuccess(true)
                setFormSuccessMessage('Operación completada con éxito!')
                setIsOpen(false)
                taskList.push({ id: data.id, title: data.title })
                handleAddTaskListChange(taskList)
            })
    }
    return (
        <>
            <div className={styles.bgModal} onClick={() => setIsOpen(false)} />
            <div className={styles.modalBox}>
                <form method='POST' action="https://jsonplaceholder.typicode.com/todos/" className={styles.userForm} onSubmit={submitForm}>
                    <div className={styles.modalHeader}>
                        <h3>Añadir Tarea</h3>
                    </div>
                    <div className={styles.modalCloseContainer}>
                        <Image src='/X.svg' width={15} height={15} alt="Close window" className={styles.modalClose} onClick={() => setIsOpen(false)} />
                    </div>
                    <div className={styles.inputForm}>
                        <label htmlFor="title" className={styles.formLabel}>Nombre <span className={styles.error}>*</span></label>
                        <input type="text" name='title' className={styles.formInput} onChange={handleInput} placeholder='Nombre' />
                    </div>
                    <div className={styles.inputForm}>
                        <label htmlFor="desc" className={styles.formLabel}>Descripción <span className={styles.error}>*</span></label>
                        <textarea name='desc' className={`${openSans.className} ${styles.formInput}`} onChange={handleInput} placeholder='Descripción' />
                    </div>
                    <div className={styles.buttonsWrapper}>
                        <button className={`${styles.formButtonCancel} ${styles.formButton} ${openSans.className}`} onClick={() => setIsOpen(false)} >Cancelar</button>
                        <button type='submit' className={`${styles.formButton} ${openSans.className}`} >Guardar</button>
                    </div>
                </form>
            </div>

        </>
    )

}