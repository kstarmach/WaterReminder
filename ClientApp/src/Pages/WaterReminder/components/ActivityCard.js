import { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Badge, Table } from 'reactstrap';

const Icon = ({ label }) => {
    if (label === 'Water') {
        return (
            <i className="bi bi-droplet-fill me-1"></i>
        )
    }
    if (label === 'Tea' || label === 'Coffee') {
        return (
            <i className="bi bi-cup-hot-fill me-1"></i>
        )
    }
    if (label === 'Soda') {
        return (
            <i className="bi bi-cup-straw me-1"></i>
        )
    }
}

const Activity = ({ drink, time, quantity }) => {
    return (
        <tr>
            <td>
                <span className='fw-bold'>
                    <Icon label={drink} />
                    {drink}
                </span>
            </td>
            <td>
                <span className='text-muted fs-6'>
                    {time}
                </span>
            </td>
            <td>
                <Badge pill>
                    {quantity} ml
                </Badge>
            </td>
        </tr>
    )
}

const ActivityCard = () => {
    const [history, setHistory] = useState(JSON.parse(localStorage.getItem("drink_array") || "[]"))

    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem("drink_array") || "[]"))
    }, [localStorage.getItem("drink_array")])

    return (
        <Card >
            <CardBody>
                <CardTitle className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'>Latest drinking activity</p>
                    <p className='text-muted align-self-center '></p>
                </CardTitle>

                <Table
                    borderless
                    hover
                    size="sm"
                >
                    <tbody>
                        {history.map((obj, index) =>
                            <Activity drink={obj.drink} time={obj.time} quantity={obj.quantity} key={index} />
                        )}

                    </tbody>
                </Table>
            </CardBody>
        </Card>


    )
}

export default ActivityCard