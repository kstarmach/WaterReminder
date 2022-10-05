import React from 'react';

import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import Button from '@mui/material/Button';
import { useCountdown } from '../hooks/useCountdown';


const DrinkingButton = () => {
    return (
        <Button
            variant="contained"
            color="primary"
            sx={{ height: 40 }}
            startIcon={<LocalDrinkIcon />}
            endIcon={<LocalDrinkIcon />}
        >
            Okay Pomu, I will drink my water now. Thank you for the reminder
        </Button>
    )
}

const ExpiredNotice = () => {
    return (<>

        <video
            loop controls autoPlay
            width='650px'
            height='400px'
        >
            <source src="videos/WaterReminder.mp4" type="video/webm" />
        </video>

        <DrinkingButton />
    </>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">

            {minutes} : {seconds > 10 ? seconds : `0${seconds}`}
        </div>
    );
};

const CountdownTimer = ({ targetDate, handleExpire }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice handleExpire={handleExpire} />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
