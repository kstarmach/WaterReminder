import Button from '@mui/material/Button';

import TimerIcon from '@mui/icons-material/Timer';
import TimerOffIcon from '@mui/icons-material/TimerOff';

import CountdownTimer from './components/CountdownTimer'
import { Grid } from '@mui/material';
import { useState } from 'react';

import Statistics from './components/Statistics'

const Player = ({ isShow }) => {

  if (isShow) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <video
            loop controls
            width='650px'
            height='400px'
          >
            <source src="videos/WaterReminder.mp4" type="video/webm" />
          </video>
        </Grid>

      </Grid>
    )
  }
  return (<></>)
}

const Buttons = ({ buttonHandler, buttonVariant }) => {
  if (!buttonVariant) {
    return (

      <Button
        variant="contained"
        color="success"
        sx={{ height: 40 }}
        startIcon={<TimerIcon />}
        onClick={buttonHandler}>
        Start Timer
      </Button>
    )
  }

  return (
    <Button
      variant="contained"
      color="error"
      sx={{ height: 40 }}
      startIcon={<TimerOffIcon />}
      onClick={buttonHandler}>
      Stop Timer
    </Button>
  )
}


const Timer = ({ showTimer, handleShowPlayer }) => {
  const THREE_DAYS_IN_MS = 1 * 1 * 1 * 9 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  if (showTimer) {
    return (<>
      <h1><CountdownTimer targetDate={dateTimeAfterThreeDays} handleExpire={handleShowPlayer} /></h1>
    </>)
  }
  return (<></>)
}

function App() {

  const [showPlayer, setShowPlayer] = useState(false)
  const [showTimer, setShowTimer] = useState(false)


  const handleStartButton = () => {
    setShowTimer(!showTimer)
  }

  const handleShowPlayer = () => {
    setShowPlayer(!showPlayer)
  }

  return (
    <>
      <Grid container spacing={2} style={{ textAlign: "center" }}>
        <Grid item xs={6} >
          <Buttons buttonHandler={handleStartButton} buttonVariant={showTimer} />
          <Timer showTimer={showTimer} handleShowPlayer={handleShowPlayer} />
        </Grid>

        <Grid item xs={6}>
          <Statistics />
        </Grid>

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Player isShow={showPlayer} />
        </Grid>
      </Grid>
    </>



  );
}

export default App;
