import { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Badge, Row, Col, Container } from 'reactstrap';

const CalculatorCard = () => {
    const [intake, setIntake] = useState(3.600)
    const [cups, setCups] = useState(10)
    const [size, setSize] = useState(0.250)
    const [gender, setGender] = useState(0)
    const [weight, setWeight] = useState(50)
    const [activity, setActivity] = useState(0.25)

    const cupsQuantity = () => {
        let cup = []
        for (let index = 0; index < cups; index++) {
            cup.push(<i className="bi bi-cup-straw" key={index}></i>)
        }
        return cup
    }

    useEffect(() => {
        let newIntake = (weight * 0.033)
        setIntake((Number(newIntake) + Number(activity) + Number(gender)).toFixed(3))
        setCups(Math.round(intake / size))
    }, [size, weight, gender, activity, cups, intake])

    return (


        <Card color="info " inverse>
            <CardBody>
                <CardTitle tag="h5" className='fw-bolder mb-3'>
                    Calculator

                </CardTitle>

                <Container>

                    <Row>
                        <Col xs={1} className='d-flex justify-content-center'>
                            <span className='fs-2 fw-semibold  mt-1'>
                                <i className="bi bi-bullseye "></i>
                            </span>
                        </Col>
                        <Col>
                            <CardText className="fw-semibold mt-2 mb-0" tag='h6'>

                                Daily goal
                            </CardText>

                            <CardText className='fw-bold' tag='h6'>
                                Tap to customize
                            </CardText>
                        </Col>
                        <Col align='right' role={'button'}>
                            <CardText className='fs-2 fw-bolder'>
                                <Badge pill color='primary'>

                                    {intake} ML
                                    <i className="bi bi-chevron-right"></i>
                                </Badge>
                            </CardText>
                        </Col>
                    </Row>
                </Container>

                <br />

                <CardSubtitle
                    className="mb-2 "
                    tag="h6"
                >
                    Suggested daily cups of water ({size * 1000}ml)
                </CardSubtitle>
                <CardText className='fs-2 fw-bolder'>
                    ({cups}) {cupsQuantity()}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CalculatorCard