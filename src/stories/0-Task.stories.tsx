import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { TaskModel, TaskState } from '../models'
import { Task } from '../components'

export const getTask = (state: TaskState): TaskModel => ({
    id: '1',
    title: 'Test task',
    state: state,
    updateAt: new Date('2018-01-01T09:00Z'),
})

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
}

storiesOf('Task', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{ story() }</div>)
    .add('default', () => <Task task={getTask('TASK_INBOX')} actions={actions} />)
    .add('pinned', () => <Task task={getTask('TASK_PINNED')} actions={actions} />)
    .add('archived', () => <Task task={getTask('TASK_ARCHIVED')} actions={actions} />)