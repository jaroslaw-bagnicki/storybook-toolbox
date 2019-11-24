import React from 'react'
import { Task, LoadingRow } from '.'
import { TaskActions } from './Task'
import { TaskModel } from '../models'

export const taskCompare = (a: TaskModel, b: TaskModel) => {
    if (a.state === b.state) return 0;
    if (a.state === 'TASK_PINNED') return -1;
    return 1;
}

type Props = {
    isLoading: boolean,
    tasks: TaskModel[],
    actions: TaskActions,
}

const TaskList: React.FC<Props> = (({ isLoading, tasks, actions }) => {

    if (isLoading) {
        return (
            <div className="list-items">
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
            </div>)
    }

    if (tasks.length === 0) {
        return (
        <div className="list-items">
            <div className="wrapper-message">
                <span className="icon-check" />
                <div className="title-message">You have no tasks</div>
                <div className="subtitle-message">Sit back and relax</div>
            </div>
        </div>)
    }

    const sortedTask = tasks.sort(taskCompare)

    return (
        <div className="list-items">
            { tasks.map(task => <Task key={task.id} task={task} actions={actions} />)}
        </div>
    );
})

export default TaskList