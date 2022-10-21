import { Modal, Card, CardBody, CardTitle, ModalHeader, ModalBody, ModalFooter, Row, Col, Button } from 'reactstrap';
import { useState, useEffect } from 'react';
import CalculatorCard from "./Settings/CalculatorCard"
import SizeSetting from "./Settings/SizeSetting"
import ActivitySetting from "./Settings/ActivitySetting"
import WeightSetting from "./Settings/WeightSetting"
import GenderSetting from './Settings/GenderSetting';
import SiteSetting from './Settings/SiteSetting';
import ClimateSetting from './Settings/ClimateSetting';
import NotificationSound from './Settings/NotificationSound';

const Settings = ({ toggle, modal }) => {
    const [gender, setGender] = useState(0)
    const [weight, setWeight] = useState(50)
    const [activity, setActivity] = useState(0.25)
    const [size, setSize] = useState(0.250)
    const [intake, setIntake] = useState(2.500)
    const [cups, setCups] = useState(10)

    useEffect(() => {
        let newIntake = (weight * 0.033)
        setIntake((Number(newIntake) + Number(activity) + Number(gender)).toFixed(3))
        setCups(Math.round(intake / size))
    }, [size, weight, gender, activity, cups, modal, intake])

    return (

        <Row className='mt-5'>
            <Col></Col>
            <Col sm={12} xl={3} >
                <Card className='pb-1'>

                    <CardBody>
                        <CardTitle className=' d-flex justify-content-between '>
                            <p className='fs-4 fw-bolder'>Settings</p>
                            <p className='text-muted align-self-center '></p>
                        </CardTitle>


                        <GenderSetting handleChange={(e) => setGender(e.target.value)} gender={gender} />

                        <WeightSetting handleChange={(event) => setWeight(event.target.value)} weight={weight} />

                        <ActivitySetting handleChange={(event) => setActivity(event.target.value)} value={activity} />

                        <ClimateSetting />
                    </CardBody>
                </Card>
                <Card className='pb-1'>

                    <CardBody>

                        <CardTitle className=' d-flex justify-content-between '>
                            <p className='fs-4 fw-bolder'> Preferences</p>
                            <p className='text-muted align-self-center '></p>
                        </CardTitle>

                        <SizeSetting handleChange={(event) => setSize(event.target.value)} size={size} />

                        <NotificationSound />

                        <SiteSetting />
                    </CardBody>
                </Card>
            </Col>


            <Col sm={12} xl={3}>
                <CalculatorCard intake={intake} size={size} cups={cups} />
            </Col>
            <Col> </Col>
        </Row>

    )
}

export default Settings