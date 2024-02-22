import styles from '../../page.module.css';
import Image from 'next/image';
import { useState } from 'react';

//TODO form de agregado
export default function TaskCard(task: any) {
    const [visible, setVisible] = useState(true);
    const deleteTask = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/' + task.task.id, {
            method: "DELETE",
            headers: {
                'accept': 'application/json',
            },
        }).then((response) => {
            if (response.status >= 400) {
                throw new Error()
            }
            return response.json();
        })
        setVisible((prev) => !prev);
    };
    return (
        <>
            {visible && (
                <div className={styles.taskCardContainer}>
                    <div className={styles.taskCardContent}>
                        <h3 className={styles.taskCardTitle}>{task.task.title}</h3>
                        <p className={styles.taskCardDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna vehicula nisi aliquam pulvinar sit interdum eget ac. Rhoncus et nunc, aliquam, ac faucibus odio porta diam lorem. Dictum amet malesuada dictum tristique sollicitudin sed sagittis.</p>
                    </div>
                    <div className={styles.deleteContainer}>
                        <Image src='/TrashCan.svg' fill alt="deleteButton" onClick={() => deleteTask()} className={styles.menuIcon} />
                    </div>
                </div>
            )}
        </>
    )
}

