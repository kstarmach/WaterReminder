import { useState } from 'react';
import { CardSubtitle, Col, FormGroup, Label, Input } from 'reactstrap';

const GenderSetting = () => {

    const [gender, setGender] = useState(0)
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
                            onChange={() => setGender(1)}
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
                            onChange={() => setGender(0)}
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