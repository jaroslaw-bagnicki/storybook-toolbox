import React from 'react'
import { TaskModel } from '../models';
import cls from 'classnames';

type Props = {
    task: TaskModel,
    onArchiveTask(id: string): void,
    onPinTask(id: string): void,
}

const Task: React.FunctionComponent<Props> = ({ task: { id, title, state }, onArchiveTask, onPinTask}) => (
    <div className={cls('list-item', state)}>
        <label className="checkbox">
            <input 
                name="checked"
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disabled />
            <span className="checkbox-custom" onClick={_ => onArchiveTask(id)} />
        </label>

        <div className="title">
            <input type="text" value={title} readOnly={true} placeholder="Input title" />
        </div>

        <div className="actions" onClick={ev => ev.stopPropagation()}>
            { state !== 'TASK_ARCHIVED' &&
                <a onClick={_ => onPinTask(id)}>
                    <span className="icon-star" />
                </a>
            }
        </div>
    </div>
);

export default Task;
