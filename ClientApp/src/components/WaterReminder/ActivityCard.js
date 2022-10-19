import { Card, CardBody, CardTitle, Badge, Table } from 'reactstrap';

const ActivityCard = () => {
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
                        <tr>
                            <td>
                                <span className='fw-bold'><i className="bi bi-droplet-fill me-1"></i>Water</span>
                            </td>
                            <td>
                                <span className='text-muted fs-6'>01:18 PM</span>
                            </td>
                            <td>
                                <Badge pill>
                                    330 ml
                                </Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className='fw-bold'><i className="bi bi-cup-hot-fill me-1"></i>Tea</span>
                            </td>
                            <td>
                                <span className='text-muted fs-6'>02:10 PM</span>

                            </td>
                            <td>
                                <Badge pill>
                                    200 ml
                                </Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className='fw-bold'><i className="bi bi-cup-hot-fill me-1"></i>Coffee</span>

                            </td>
                            <td>
                                <span className='text-muted fs-6'>03:40 PM</span>

                            </td>
                            <td>
                                <Badge pill>
                                    250 ml
                                </Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className='fw-bold'><i className="bi bi-cup-straw me-1"></i>Pepsi</span>

                            </td>
                            <td>
                                <span className='text-muted fs-6'>03:40 PM</span>

                            </td>
                            <td>
                                <Badge pill>
                                    250 ml
                                </Badge>
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card>


    )
}

export default ActivityCard