import React from 'react'
import { Task, LoadingRow } from '.'
import { TaskModel } from '../models'
import { taskCompare } from '../helpers/taskCompare'
import { connect } from 'react-redux'
import { TodosState, pinTask, archiveTask, TaskActions } from '../store'
import { Dispatch } from 'redux'

type Props = {
    isLoading: boolean,
}

type AllProps = Props & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const TaskList: React.FC<AllProps> = (({ isLoading, tasks, actions }) => {

    if (isLoading) {
        return (
            <div className="list-items">
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
            </div>)
    }

    if (tasks.length === 0) {
        return (
        <div className="list-items">
            <div className="wrapper-message">
                <span className="icon-check" />
                <div className="title-message">You have no tasks</div>
                <div className="subtitle-message">Sit back and relax</div>
            </div>
        </div>)
    }

    const sortedTasks = [...tasks].sort(taskCompare)

    return (
        <div className="list-items">
            { sortedTasks.map(task => <Task key={task.id} task={task} actions={actions} />)}
        </div>
    );
});

TaskList.defaultProps = {
    isLoading: false,
}

const mapStateToProps = ({ tasks }: TodosState) => ({
    tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
});

const mapDispatchToProps = (dispatch: Dispatch<TaskActions>) => ({
    actions: {
        onPinTask: (id: string) => dispatch(pinTask(id)),
        onArchiveTask: (id: string) => dispatch(archiveTask(id)),
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);