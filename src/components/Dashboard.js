import React from 'react';

const Dashboard = ({strike}) => {

    return (
        <div style={{display: 'flex', }}>
            <div>
                <h2>Strike</h2>
                <button onClick={strike}>push</button>
            </div>
            <div>
                <h2>Ball</h2>
                <button>push</button>
            </div>
            <div>
                <h2>Foul</h2>
                <button>push</button>
            </div>
            <div>
                <h2>Hit</h2>
                <button>push</button>
            </div>
        </div>
    )
}

export default Dashboard;