import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])


    const changeState = (id) => {
        console.log("TODO: Cambiar el estado de una tarea");
    };

    return (
        <div>
            <div>
                <h1>Tus tareas:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para agregar una lista de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
