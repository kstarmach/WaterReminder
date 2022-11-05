import { CardSubtitle, FormGroup, Label, Input, Col, Container, Row, CardText } from 'reactstrap';
import RangeSlider from 'react-bootstrap-range-slider';

const WeightSetting = ({ handleChange, weight }) => {
    return (

        <Container className="mb-3">
            <Row>
                <Col xs={1} className='d-flex justify-content-center'>
                    <span className='fs-2 fw-semibold text-muted '>
                        <i className="bi bi-dice-4-fill opacity-50"></i>
                    </span>
                </Col>
                <Col>
                    <CardText className="fw-semibold mt-3 mb-0 " tag='h6'>
                        Weight
                    </CardText>

                </Col>
                <Col align='right' className='mt-3 fw-semibold ' style={{ color: 'orangered' }}>
                    <span role={'button'}>
                        56 KG
                        <i className="bi bi-chevron-right"></i>
                    </span>
                </Col>
            </Row>

            <Row>
                <Col xs={1} className='d-flex justify-content-center'>
                    <span className='fs-2 fw-semibold text-muted '>
                        <i className="bi bi-universal-access opacity-50"></i>
                    </span>
                </Col>
                <Col>
                    <CardText className="fw-semibold mt-3 mb-0 " tag='h6'>
                        Height
                    </CardText>

                </Col>
                <Col align='right' className='mt-3 fw-semibold ' style={{ color: 'orangered' }} >
                    <span role={'button'}>
                        177 CM
                        <i className="bi bi-chevron-right"></i>
                    </span>
                </Col>
            </Row>

        </Container>
        // <>
        //     <CardSubtitle className="fw-semibold ">
        //         <i className="bi bi-dice-4-fill me-2 text-muted"></i>
        //         Weight
        //     </CardSubtitle>

        //     <FormGroup >
        //         {/* <Label for="exampleRange">
        //             {weight} kg
        //         </Label> */}
        //         {/* <Input
        //             id="exampleRange"
        //             name="range"
        //             type="range"
        //             value={weight}
        //             onChange={handleChange}
        //             min={25}
        //             max={150}
        //         /> */}
        //         <RangeSlider
        //             value={weight}
        //             onChange={handleChange}
        //             min={25}
        //             max={150}
        //             tooltip='on'

        //             tooltipPlacement='top'
        //             tooltipLabel={v => `${v} kg`}
        //             //onChange={changeEvent => setValue(changeEvent.target.value)}
        //             className='mt-3'
        //         />
        //     </FormGroup>
        // </>
    )
}

export default WeightSetting