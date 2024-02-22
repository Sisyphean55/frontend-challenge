'use client'
import styles from '../page.module.css';
import { use, useEffect } from "react";
import { useState } from 'react';
import TaskCard from '../components/tasks/taskCard';
import ModalForm from '../components/forms/modalForm';

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const handleAddTaskListChange = (newTaskList) => {
        setTaskList(newTaskList);
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((taskList) => {
                setTaskList(taskList);
            });
    }, [])
    return (
        <main className={styles.main}>
            <div className={styles.headline}>
                <h2>Mis tareas</h2>
            </div>
            {taskList.map((task: object, index: number) =>
                index < 3 ? <TaskCard key={index} task={task} /> : ''
            )}
            <button className={styles.formButton} onClick={() => setIsOpen(true)}>Añadir Tarea</button>
            {isOpen && <ModalForm setIsOpen={setIsOpen} isOpen={isOpen} taskList={taskList} handleAddTaskListChange={handleAddTaskListChange} />}
        </main>
    );
}
