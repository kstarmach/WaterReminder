import { Modal, Card, CardBody, CardTitle, CardText, CardSubtitle, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
const SizeSetting = ({ handleChange }) => {
    return (
        <>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Cup size
            </CardSubtitle>
            <FormGroup
                row
                tag="fieldset"
                onChange={handleChange}
            >
                <Col sm={3}>
                    <FormGroup check>
                        <Input
                            name="radio3"
                            type="radio"
                            value={0.150}
                        />
                        {' '}
                        <Label check>
                            150 ml
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={3}>
                    <FormGroup check>
                        <Input
                            name="radio3"
                            type="radio"
                            value={0.200}
                        />
                        {' '}
                        <Label check>
                            200 ml
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={3}>
                    <FormGroup check>
                        <Input
                            name="radio3"
                            type="radio"
                            defaultChecked
                            value={0.250}
                        />
                        {' '}
                        <Label check>
                            250 ml
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={3}>
                    <FormGroup check>
                        <Input
                            name="radio3"
                            type="radio"
                            value={0.300}
                        />
                        {' '}
                        <Label check>
                            300 ml
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
        </>
    )
}

export default SizeSetting