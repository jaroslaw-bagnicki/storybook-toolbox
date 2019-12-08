import React from 'react'
import { TaskList } from '.';
import { connect } from 'react-redux';

type Props = {
    error: string,
}

export const InboxScreen: React.FC<Props> = ({ error }) => {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad"/>
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Someting went wrong.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskList isLoading={false}/>
        </div>
    );
}

InboxScreen.defaultProps = {
    error: null,
}

export default connect(({ error }: { error: string }) => ({ error }))(InboxScreen);