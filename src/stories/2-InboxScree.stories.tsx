import React from 'react'
import { storiesOf } from '@storybook/react'
import { PureInboxScreen } from '../components'
import { action } from '@storybook/addon-actions'
import { Provider } from 'react-redux'
import { Store } from 'redux'

const mockStore = {
    getState: () => ({
        tasks: [
            { id: '1', title: 'Something', state: 'TASK_INBOX', updateAt: new Date('2018-01-01T09:00Z') },
            { id: '2', title: 'Something more', state: 'TASK_INBOX', updateAt: new Date('2018-01-01T09:00Z') },
            { id: '3', title: 'Something else', state: 'TASK_INBOX', updateAt: new Date('2018-01-01T09:00Z') },
            { id: '4', title: 'Something again', state: 'TASK_INBOX', updateAt: new Date('2018-01-01T09:00Z') },
        ],
    }),
    subscribe: () => 0,
    dispatch: action('dispatch'),
} as unknown as Store;


storiesOf('InboxScreen', module)
    .addDecorator(story => <Provider store={mockStore}>{ story() }</Provider>)
    .add('default', () => <PureInboxScreen/>)
    .add('error', () => <PureInboxScreen error={'Sample error'}/>)