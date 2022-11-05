import { CardText, Col, Container, Row, Form, FormGroup, Input, Label } from "reactstrap"


const PregnancySetting = () => {
    return (
        <Container className="mb-3">
            <Row>
                <Col xs={1} className='d-flex justify-content-center'>
                    <span className='fs-2 fw-semibold text-muted '>
                        <i className="bi bi-android2 opacity-50"></i>
                    </span>
                </Col>
                <Col>
                    <CardText className="fw-semibold mt-2 mb-0" tag='h6'>
                        Pregnant
                    </CardText>
                    <CardText className='fw-semibold  text-muted opacity-50' tag='h6'>
                        +450 ml
                    </CardText>
                </Col>
                <Col align='right'>
                    <Form>
                        <FormGroup switch className='mt-3 form-check-reverse'>
                            <Input type="switch" role="switch" style={{ transform: "scale(1.8)" }} />
                            <Label check></Label>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col xs={1} className='d-flex justify-content-center'>
                    <span className='fs-2 fw-semibold text-muted '>
                        <i className="bi bi-android2 opacity-50"></i>
                    </span>
                </Col>
                <Col>
                    <CardText className="fw-semibold mt-2 mb-0" tag='h6'>
                        Breastfeeding
                    </CardText>
                    <CardText className='fw-semibold  text-muted opacity-50' tag='h6'>
                        +350 ml
                    </CardText>
                </Col>
                <Col align='right'>
                    <Form>
                        <FormGroup switch className='mt-3 form-check-reverse'>
                            <Input type="switch" role="switch" style={{ transform: "scale(1.8)" }} />
                            <Label check></Label>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default PregnancySetting