import { CardSubtitle, Col, FormGroup, Label, Input } from 'reactstrap';
const SizeSetting = ({ handleChange, size }) => {
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
            >
                <Col sm={3}>
                    <FormGroup check>
                        <Input
                            checked={size == 0.150}
                            name="radio3"
                            type="radio"
                            value={0.150}
                            onChange={handleChange}
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
                            checked={size == 0.200}
                            name="radio3"
                            type="radio"
                            value={0.200}
                            onChange={handleChange}
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
                            checked={size == 0.250}
                            name="radio3"
                            type="radio"
                            value={0.250}
                            onChange={handleChange}
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
                            checked={size == 0.300}
                            name="radio3"
                            type="radio"
                            value={0.300}
                            onChange={handleChange}
                        />
                        {' '}
                        <Label check>
                            300 ml
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
            <hr />
        </>
    )
}

export default SizeSetting