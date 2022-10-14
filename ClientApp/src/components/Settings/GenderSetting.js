import { Modal, Card, CardBody, CardTitle, CardText, CardSubtitle, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
const GenderSetting = ({ handleChange }) => {
    return (
        <>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                Gender
            </CardSubtitle>
            <FormGroup
                row
                tag="fieldset"
                onChange={handleChange}
            >
                <Col sm={3}>
                    <FormGroup check>
                        <Input
                            name="radio2"
                            type="radio"
                            value={1}
                        />
                        {' '}
                        <Label check>
                            Male
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={3}>
                    <FormGroup check>
                        <Input
                            name="radio2"
                            type="radio"
                            value={0}
                            defaultChecked
                        />
                        {' '}
                        <Label check>
                            Female
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
        </>

    )
}

export default GenderSetting