import { taskCompare } from './taskCompare'
import { TaskModel, TaskState } from '../models'

describe('taskCompare', () => {

    function getTasks(stateA: TaskState, stateB: TaskState): TaskModel[] {
        return [
            {
                id: '',
                title: '',
                state: stateA,
                updateAt: new Date(),
            },
            {
                id: '',
                title: '',
                state: stateB,
                updateAt: new Date(),
            },
        ]
    }

    it('should return 0 if same state or if neither of status is TASK_PINNED', () => {

        let taskA, taskB: TaskModel;

        [taskA, taskB] = getTasks('TASK_ARCHIVED', 'TASK_ARCHIVED');
        expect(taskCompare(taskA, taskB)).toBe(0);

        [taskA, taskB] = getTasks('TASK_INBOX', 'TASK_INBOX');
        expect(taskCompare(taskA, taskB)).toBe(0);

        [taskA, taskB] = getTasks('TASK_PINNED', 'TASK_PINNED');
        expect(taskCompare(taskA, taskB)).toBe(0);

        [taskA, taskB] = getTasks('TASK_INBOX', 'TASK_ARCHIVED');
        expect(taskCompare(taskA, taskB)).toBe(0);

        [taskA, taskB] = getTasks('TASK_ARCHIVED', 'TASK_INBOX');
        expect(taskCompare(taskA, taskB)).toBe(0);
    })

    it('should return -1 if first task status is TASK_PINNED', () => {

        let taskA, taskB: TaskModel;

        [taskA, taskB] = getTasks('TASK_PINNED', 'TASK_ARCHIVED');
        expect(taskCompare(taskA, taskB)).toBe(-1);

        [taskA, taskB] = getTasks('TASK_PINNED', 'TASK_INBOX');
        expect(taskCompare(taskA, taskB)).toBe(-1);
    })

    it('should return 1 if second task status is TASK_PINNED', () => {

        let taskA, taskB: TaskModel;

        [taskA, taskB] = getTasks('TASK_ARCHIVED', 'TASK_PINNED');
        expect(taskCompare(taskA, taskB)).toBe(1);

        [taskA, taskB] = getTasks('TASK_INBOX', 'TASK_PINNED');
        expect(taskCompare(taskA, taskB)).toBe(1);
    })
})