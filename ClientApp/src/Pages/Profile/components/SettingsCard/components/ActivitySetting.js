import { CardSubtitle, FormGroup, Input, Col, Row, CardText, Container } from 'reactstrap';
const ActivitySetting = ({ handleChange, value }) => {
    return (
        <Container>

            <Row>
                <Col xs={1} className='d-flex justify-content-center'>
                    <span className='fs-2 fw-semibold text-warning '>
                        <i className="bi bi-bicycle  "></i>
                    </span>
                </Col>
                <Col>
                    <CardText className="fw-semibold mt-2 mb-0" tag='h6'>

                        Activity level
                    </CardText>

                    <CardText className='fw-bold  text-warning' tag='h6'>
                        +500 ml
                    </CardText>
                </Col>
                <Col  >
                    <FormGroup className='mt-2'>
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
        </Container>

    )
}

export default ActivitySetting