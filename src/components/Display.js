import React from 'react';

const Display = ({ strikes, balls }) => {

    return (
        <div style={{display: 'flex',}}>
            <div>
                <h2>Balls</h2>
                <p>{balls}</p>
            </div>
            <div>
                <h2>Strikes</h2>
                <p>{strikes}</p>
            </div>
        </div>
    )
}

export default Display;