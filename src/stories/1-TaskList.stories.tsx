import React from 'react'
import { storiesOf } from '@storybook/react'
import { TaskModel, TaskState } from '../models'
import { Task, PureTaskList as TaskList } from '../components'
import { actions } from './0-Task.stories'

const taskBase: Pick<TaskModel, 'state'| 'updateAt'> = {
    state: 'TASK_INBOX',
    updateAt: new Date('2018-01-01T09:00Z'),
}

const defaultTasks: TaskModel[] = [
    { ...taskBase, id: '1', title: 'Task 1' },
    { ...taskBase, id: '2', title: 'Task 2' },
    { ...taskBase, id: '3', title: 'Task 3' },
    { ...taskBase, id: '4', title: 'Task 4' },
    { ...taskBase, id: '5', title: 'Task 5' },
    { ...taskBase, id: '6', title: 'Task 6' },
]

const tasksWithPinnedTask: TaskModel[] = [
    ...defaultTasks.slice(0, 5),
    { ...taskBase, id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
]

storiesOf('TaskList', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{ story() }</div>)
    .add('default', () => <TaskList isLoading={false} tasks={defaultTasks} actions={actions} />)
    .add('withPinnedTask', () => <TaskList isLoading={false} tasks={tasksWithPinnedTask} actions={actions} />)
    .add('loading', () => <TaskList isLoading tasks={[]} actions={actions} />)
    .add('empty', () => <TaskList isLoading={false} tasks={[]} actions={actions} />)
