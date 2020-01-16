import React from 'react';

const Display = ({ strikes, balls }) => {

    return (
        <div style={{display: 'flex',}}>
            <div>
                <h2>Balls</h2>
                <p data-testid="balls">{balls}</p>
            </div>
            <div>
                <h2>Strikes</h2>
                <p data-testid="strikes">{strikes}</p>
            </div>
        </div>
    )
}

export default Display;