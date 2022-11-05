import { Card, CardBody, CardTitle } from 'reactstrap';
import { useEffect, useState } from 'react';

const WaterCard = () => {
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setQuantity(localStorage.getItem("water_count") || 0)


    }, [localStorage.getItem("water_count")])

    return (
        <Card style={{ backgroundColor: '#3F42AE', borderColor: '#3F42AE' }}>
            <CardBody>

                <CardTitle>
                    <p className='fs-4 fw-bold text-white'>Your Intake Goal</p>
                    <p className='fs-3 fw-bolder text-white'>{quantity} ml / 3500 ml</p>
                </CardTitle>

            </CardBody>
        </Card>
    )
}

export default WaterCard