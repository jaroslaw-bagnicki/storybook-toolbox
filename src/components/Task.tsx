import React from 'react'
import { TaskModel } from '../models';

type Props = {
    task: TaskModel,
    onArchiveTask(id: string): void,
    onPinTask(id: string): void,
}

const Task: React.FunctionComponent<Props> = ({ task: { id, title, state }, onArchiveTask, onPinTask}) => (
    <div className="list-item">
        <input type="text" value={title} readOnly={true} />
    </div>
);

export default Task;
