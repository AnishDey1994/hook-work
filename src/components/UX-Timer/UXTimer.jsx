import React, { useState, useEffect } from 'react';
import UXButton from '../UX-Button/UXButton';

const UXTimer = (props) => {
    const [timer, setTimer] = useState(props.timer && props.timer);
    const [timerFlag, setTimerFlag] = useState(false);
    const [msg, setMsg] = useState('');
    useEffect(() => {
        const handleTimer = () => {
            if (timer === 0) {
                setMsg('Your time is up!');
            } else {
                if (!timerFlag) {
                    setTimer(timer - 1)
                }
            }
        }
        const interval = setInterval(handleTimer, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [timer, timerFlag])

    const handleToggleTimer = () => {
        setTimerFlag(!timerFlag);
    }

    return (
        <div>
            <p>{timer}</p>
            <UXButton
                id='counterBtn'
                class='btn-info'
                type='button'
                onTap={() => handleToggleTimer()}
                value={timerFlag ? 'Resume counter' : 'Pause counter'}
            />
            {msg ? <p style={{ 'color': 'red' }}>{msg}</p> : null}
        </div>
    );
};

export default UXTimer;