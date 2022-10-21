import { Modal, Card, CardBody, CardTitle,  ModalHeader, ModalBody, ModalFooter, Row, Col, Button } from 'reactstrap';
import { useState, useEffect } from 'react';
import CalculatorCard from "../Settings/CalculatorCard"
import SizeSetting from "../Settings/SizeSetting"
import ActivitySetting from "../Settings/ActivitySetting"
import WeightSetting from "../Settings/WeightSetting"
import GenderSetting from '../Settings/GenderSetting';




const SettingsModal = ({ toggle, modal }) => {
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
    }, [size, weight, gender, activity, cups,  modal, intake])

    return (
        <Modal isOpen={modal} toggle={toggle} size="xl" centered>
            <ModalHeader toggle={toggle}>Settings</ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={6} >
                        <Card color="dark" inverse className='pb-1'>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Settings
                                </CardTitle>

                                <GenderSetting handleChange={(e) => setGender(e.target.value)}  gender={gender}/>

                                <WeightSetting handleChange={(event) => setWeight(event.target.value)} weight={weight} />

                                <ActivitySetting handleChange={(event) => setActivity(event.target.value)} value={activity}/>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} >

                        <Card color="dark" inverse className='h-100'>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Preferences
                                </CardTitle>
                                <SizeSetting handleChange={(event) => setSize(event.target.value)} size={size}/>

                                <CalculatorCard intake={intake} size={size} cups={cups} />

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button color="dark" onClick={toggle}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default SettingsModal