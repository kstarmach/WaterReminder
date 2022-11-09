import { useState } from 'react';
import { CardSubtitle, Col, Row, FormGroup, Label, Input, CardText, Card, CardBody } from 'reactstrap';

const GenderSetting = ({ gender, handleGender }) => {

    return (
        <>

            <CardText className="fw-semibold mt-3 " tag='h6'>
                Gender
            </CardText>



            <Row>
                <Col >
                    <Card style={{ borderColor: '#90c0f5', backgroundColor: '#90c0f5', color: 'white' }}>
                        <CardBody className=' fs-3 fw-bolder'>
                            <FormGroup >
                                <Input
                                    checked={gender === true}
                                    name="gender"
                                    type="radio"
                                    value={true}
                                    onChange={handleGender}
                                />
                                {' '}
                                <Label check >
                                    <i className="bi bi-gender-male me-1"></i>
                                    Male
                                </Label>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ borderColor: '#e27e9e', backgroundColor: '#e27e9e', color: 'white' }}>
                        <CardBody className=' fs-3 fw-bolder'>
                            <FormGroup >
                                <Input

                                    checked={gender === false}
                                    name="gender"
                                    type="radio"
                                    value={false}
                                    onChange={handleGender}
                                />
                                {' '}
                                <Label check>
                                    <i className="bi bi-gender-female me-1"></i>
                                    Female
                                </Label>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </>

    )
}

export default GenderSetting