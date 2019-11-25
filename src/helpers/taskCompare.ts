import { TaskModel } from '../models';

export function taskCompare (a: TaskModel, b: TaskModel): -1 | 0 | 1 {
    if (a.state === 'TASK_PINNED' && b.state !== 'TASK_PINNED') return -1;
    if (b.state === 'TASK_PINNED' && a.state !== 'TASK_PINNED') return 1;
    return 0;
}