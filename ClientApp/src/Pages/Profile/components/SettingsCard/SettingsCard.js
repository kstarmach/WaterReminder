import { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ActivitySetting from "./components/ActivitySetting"
import WeightSetting from "./components/WeightSetting"
import GenderSetting from './components/GenderSetting';
import ClimateSetting from './components/ClimateSetting';


const SettingsCard = () => {
 
    const [weight, setWeight] = useState(50)
    const [activity, setActivity] = useState(0.25)



    return (
        <Card className='pb-1'>

            <CardBody>
                <CardTitle className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'>Profile</p>
                    <p className='text-muted align-self-center '></p>
                </CardTitle>


                <GenderSetting />

                <WeightSetting handleChange={(event) => setWeight(event.target.value)} weight={weight} />

                <ActivitySetting handleChange={(event) => setActivity(event.target.value)} value={activity} />

                <ClimateSetting />
            </CardBody>
        </Card>
    )
}

export default SettingsCard