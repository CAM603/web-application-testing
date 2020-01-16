import React from 'react';

const Dashboard = ({strike, ball, foul, hit}) => {

    return (
        <div style={{display: 'flex', }}>
            <div>
                <h2>Strike</h2>
                <button 
                onClick={strike}
                data-testid="strike-btn"
                >strike</button>
            </div>
            <div>
                <h2>Ball</h2>
                <button 
                onClick={ball}
                data-testid="ball-btn"
                >push</button>
            </div>
            <div>
                <h2>Foul</h2>
                <button 
                onClick={foul}
                data-testid="foul-btn"
                >push</button>
            </div>
            <div>
                <h2>Hit</h2>
                <button 
                onClick={hit}
                data-testid="hit-btn"
                >push</button>
            </div>
        </div>
    )
}

export default Dashboard;