import { useState } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import ActivitySetting from "./components/ActivitySetting"
import WeightSetting from "./components/WeightSetting"
import GenderSetting from './components/GenderSetting';
import ClimateSetting from './components/ClimateSetting';
import PregnancySetting from './components/PregnancySetting';


const SettingsCard = () => {

    const [weight, setWeight] = useState(50)
    const [activity, setActivity] = useState(0.25)
    const [gender, setGender] = useState(true)


    return (
        <Card className='pb-1 shadow   '>

            <CardBody>
                <CardTitle tag="h5" className='fw-bolder mb-3'>
                    Profile
                </CardTitle>


                <GenderSetting gender={gender} handleGender={() => setGender(!gender)} />

                <WeightSetting handleChange={(event) => setWeight(event.target.value)} weight={weight} />


                {gender ? '' :
                    <>
                        <hr className="border border-1 opacity-50" />
                        <PregnancySetting />
                    </>
                }
                <CardText tag="h6" className="fw-semibold">
                    Additional factors
                </CardText>

                <CardText className='text-muted' tag="h6">
                    <small >Other things that directly affect your water needs</small>
                </CardText>

                <ActivitySetting handleChange={(event) => setActivity(event.target.value)} value={activity} />

                <ClimateSetting />
            </CardBody>
        </Card>
    )
}

export default SettingsCard