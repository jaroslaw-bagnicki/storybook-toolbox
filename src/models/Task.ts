export type TaskModel = {
    id: string,
    title: string,
    state: TaskState,
    updateAt: Date,
}

export type TaskState = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'