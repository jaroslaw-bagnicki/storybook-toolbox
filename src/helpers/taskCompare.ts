import { TaskModel } from '../models';

export function taskCompare (a: TaskModel, b: TaskModel) {
    if (a.state === b.state) return 0;
    if (a.state === 'TASK_PINNED') return -1;
    return 1;
}