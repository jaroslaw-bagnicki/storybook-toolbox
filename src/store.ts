import { createStore, combineReducers } from 'redux'
import { action, ActionType, StateType } from 'typesafe-actions'
import { TaskModel } from './models'

const ARCHIVE_TASK = 'ARCHIVE_TASK'
const PIN_TASK = 'PIN_TASK'

export const archiveTask = (id: string) => action(ARCHIVE_TASK, { id })
export const pinTask = (id: string) => action(PIN_TASK, { id })

export type TaskActions = ActionType<typeof archiveTask | typeof pinTask>

export const tasksReducer = (state: TaskModel[] = [], { type, payload }: TaskActions): TaskModel[] => {
    switch (type) {
        case ARCHIVE_TASK:
            return state.map(task => task.id === payload.id ? { ...task, state: 'TASK_ARCHIVED' } : task)

        case PIN_TASK:
        return state.map(task => task.id === payload.id ? { ...task, state: 'TASK_PINNED' } : task)

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    tasks: tasksReducer,
})

export type TodosState = StateType<typeof rootReducer>;

const initalState: TodosState = {
    tasks: [
        { id: '1', title: 'Something', state: 'TASK_INBOX', updateAt: new Date('2018-01-01T09:00Z') },
        { id: '2', title: 'Something more', state: 'TASK_INBOX', updateAt: new Date('2018-01-01T09:00Z') },
        { id: '3', title: 'Something else', state: 'TASK_INBOX', updateAt: new Date('2018-01-01T09:00Z') },
        { id: '4', title: 'Something again', state: 'TASK_INBOX', updateAt: new Date('2018-01-01T09:00Z') },
    ],
};

const store = createStore(rootReducer, initalState);

export default store;