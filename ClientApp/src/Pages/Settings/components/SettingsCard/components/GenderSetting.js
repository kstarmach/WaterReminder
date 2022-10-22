import { CardSubtitle,  Col, FormGroup, Label, Input } from 'reactstrap';
const GenderSetting = ({ handleChange, gender }) => {
    return (
        <>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                Gender
            </CardSubtitle>
            <FormGroup
                row
                tag="fieldset"
            >
                <Col sm={3}>
                    <FormGroup >
                        <Input
                            checked={gender === 1}
                            name="gender"
                            type="radio"
                            value={1}
                            onChange={handleChange}
                        />
                        {' '}
                        <Label check>
                            Male
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={3}>
                    <FormGroup >
                        <Input
                            checked={gender === 0}
                            name="gender"
                            type="radio"
                            value={0}
                            onChange={handleChange}
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