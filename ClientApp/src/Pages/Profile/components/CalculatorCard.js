import { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

const CalculatorCard = () => {
    const [intake, setIntake] = useState(2.500)
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
    }, [size, weight, gender, activity, cups,  intake])

    return (
        <Card color="info " inverse>
            <CardBody>
                <CardTitle className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'>Calculator</p>
                    <p className='text-muted align-self-center '></p>
                </CardTitle>

                <CardSubtitle
                    className="mb-2 "
                    tag="h6"
                >
                    Suggested daily amount
                </CardSubtitle>
                <CardText className='fs-2 fw-bolder'>
                    {intake} liters
                </CardText>
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