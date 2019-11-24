import React from 'react'

const LoadingRow: React.FC = props => (
    <div className="loading-item">
        <span className="glow-checkbox" />
        <span className="glow-text">
            <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
    </div>
)

export default LoadingRow