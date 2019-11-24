import React from 'react'
import Task, { TaskActions } from './Task'
import { TaskModel } from '../models';

type Props = {
    loading: boolean,
    tasks: TaskModel[],
    actions: TaskActions,
}

const TaskList: React.FC<Props> = (({ loading, tasks, actions }) => {

    if (loading) {
        return <div className="list-items">loading</div>
    }

    if (tasks.length === 0) {
        return <div className="list-items">empty</div>
    }

    return (
        <div className="list-items">
            { tasks.map(task => <Task key={task.id} task={task} actions={actions} />)}
        </div>
    );
})

export default TaskList;