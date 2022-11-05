import { CardSubtitle, FormGroup, Input, Col, Row } from 'reactstrap';
const ActivitySetting = ({ handleChange, value }) => {
    return (
        <>
            <Row>
                
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    <i className="bi bi-bicycle me-1"></i> 
                     Activity level
                </CardSubtitle>

                <Col>


                    <span className='fw-bold fs-4 text-warning'>
                       
                        +500 ml
                    </span>
                </Col>
                <Col>
                    <FormGroup >
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            //defaultValue="0.25"
                            value={value}
                            onChange={handleChange}
                        >
                            <option value={0}>
                                Sedentary
                            </option>
                            <option value={0.25}>
                                Light Activity
                            </option>
                            <option value={0.5}>
                                Modern Activity
                            </option>
                            <option value={1}>
                                Very Active
                            </option>
                            <option value={1}>
                                Extremely Active
                            </option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        </>
    )
}

export default ActivitySetting