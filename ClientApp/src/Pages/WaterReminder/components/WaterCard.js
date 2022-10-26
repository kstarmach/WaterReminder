import { Card, CardBody, CardTitle, CardText, Label } from 'reactstrap';
import { useEffect, useState } from 'react';

const WaterCard = ({ increase, decrease, toggle }) => {
    const [quantity, setQuantity] = useState(0)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setQuantity(localStorage.getItem("water_count") || 0)
        setCounter(Math.floor(quantity / 250))

    }, [localStorage.getItem("water_count")])

    useEffect(() => {

        setCounter(Math.floor(quantity / 250))

    }, [quantity])

    const cups = () => {
        let cup = []
        for (let index = 0; index < counter; index++) {
            cup.push(
                <i
                    className="bi bi-droplet-fill fs-3 text-primary"
                    onClick={decrease}
                    key={index}
                    role='button'
                ></i>
            )
        }
        return cup
    }
    const emptycups = () => {
        let suggestedAmount = 12
        if (counter < suggestedAmount) {
            let cup = []

            for (let index = 0; index < suggestedAmount - counter; index++) {

                cup.push(

                    <i
                        className="bi bi-droplet-fill fs-3 text-muted opacity-25"
                        role='button'
                        key={index}
                        onClick={increase}
                    ></i>
                )
            }
            return cup
        }

    }



    return (
        <Card >
            <CardBody>
                <CardTitle className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'>Water Rate</p>
                    <p className='text-muted align-self-center '><span className='fw-bold'>{quantity / 1000} L/</span>2.5 L</p>
                </CardTitle>
                <CardText className='fs-2 fw-bolder'>
                    <b>{cups()}</b>
                    {emptycups()}


                </CardText>
                <div className='text-center'>
                    <Label className='text-muted fw-bold'>Add drink</Label>
                </div>
                <div className='text-center'>
                    <i
                        role='button'
                        onClick={toggle}
                        //onClick={increase}
                        className="bi bi-plus-circle-fill  text-primary fs-2" ></i>

                </div>
            </CardBody>
        </Card>
    )
}

export default WaterCard