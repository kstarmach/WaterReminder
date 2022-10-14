import { Modal, Card, CardBody, CardTitle, CardText, CardSubtitle, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
const ActivitySetting = ({ handleChange }) => {
    return (
        <>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Activity
            </CardSubtitle>

            <FormGroup onChange={handleChange}>
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                    defaultValue="0.25"
                >
                    <option value={0}>
                        Low
                    </option>
                    <option value={0.25}>
                        Normal (working / walking)
                    </option>
                    <option value={0.5}>
                        Acitve (30 min per day)
                    </option>
                    <option value={1}>
                        Very active (1h per day)
                    </option>
                </Input>
            </FormGroup>
        </>
    )
}

export default ActivitySetting