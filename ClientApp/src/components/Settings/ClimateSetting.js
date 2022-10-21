import { CardSubtitle, FormGroup, Input } from 'reactstrap';
const ClimateSetting = ({ handleChange, value }) => {
    return (
        <>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Activity
            </CardSubtitle>

            <FormGroup >
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                //defaultValue="0.25"
                // value={value}
                // onChange={handleChange}
                >
                    <option value={0}>
                        Tropical
                    </option>
                    <option value={0.25}>
                        Temperate
                    </option>
                    <option value={0.5}>
                        Cold
                    </option>

                </Input>
            </FormGroup>
        </>
    )
}

export default ClimateSetting