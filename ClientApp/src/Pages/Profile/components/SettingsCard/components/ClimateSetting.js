import { CardSubtitle, FormGroup, Input, Col, Row, CardText, Container } from 'reactstrap';
const ClimateSetting = ({ handleChange, value }) => {
    return (
        <Container>

            <Row>
                <Col xs={1} className='d-flex justify-content-center'>
                    <span className='fs-2 fw-semibold text-success '>
                        <i className="bi bi-clouds-fill me-2"></i>
                    </span>
                </Col>
                <Col>
                    <CardText className="fw-semibold mt-2 mb-0" tag='h6'>

                        Weather
                    </CardText>

                    <CardText className='fw-bold  text-success' tag='h6'>
                        + 0 ml
                    </CardText>
                </Col>
                <Col  >
                    <FormGroup className='mt-2'>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        //defaultValue="0.25"
                        // value={value}
                        // onChange={handleChange}
                        >
                            <option value={0}>
                                Tropical
                            </option>
                            <option value={0.25}>
                                Temperate
                            </option>
                            <option value={0.5}>
                                Cold
                            </option>

                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ClimateSetting