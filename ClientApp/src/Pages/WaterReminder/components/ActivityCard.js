import { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Badge, Table } from 'reactstrap';
import { getAll } from '../../../services/drinklog';


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

    // useEffect(() => {
    //     setHistory(JSON.parse(localStorage.getItem("drink_array") || "[]"))
    // }, [localStorage.getItem("drink_array")])

    useEffect(() => {
        getAll().then(result => {
            console.log(result);
        })
    }, [])

    return (
        <Card className='h-100 shadow'>
            <CardBody>
                <CardTitle tag="h5" className='fw-bolder mb-3'>
                    Drink log
                </CardTitle>
                <div style={{
                    maxHeight: '330px',
                    overflowY: 'auto'
                }}>
                    <Table
                        borderless
                        hover
                        size="sm"
                        responsive

                    //height="200"
                    >
                        <tbody>
                            {history.map((obj, index) =>
                                <Activity drink={obj.drink} time={obj.time} quantity={obj.quantity} key={index} />
                            )}

                        </tbody>
                    </Table>
                </div>
            </CardBody>
        </Card>


    )
}

export default ActivityCard