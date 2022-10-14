import { Modal, Card, CardBody, CardTitle, CardText, CardSubtitle, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
const WeightSetting = ({ handleChange, weight }) => {
    return (
        <>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Weight
            </CardSubtitle>

            <FormGroup onChange={handleChange}>
                <Label for="exampleRange">
                    {weight} kg
                </Label>
                <Input
                    id="exampleRange"
                    name="range"
                    type="range"
                    min={25}
                    max={150}
                />

            </FormGroup>
        </>
    )
}

export default WeightSetting