import { CardSubtitle, FormGroup, Input } from 'reactstrap';
const ActivitySetting = ({ handleChange, value }) => {
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
                    value={value}
                    onChange={handleChange}
                >
                    <option value={0}>
                        Sedentary
                    </option>
                    <option value={0.25}>
                        Light Activity
                    </option>
                    <option value={0.5}>
                        Modern Activity
                    </option>
                    <option value={1}>
                        Very Active 
                    </option>
                    <option value={1}>
                        Extremely Active
                    </option>
                </Input>
            </FormGroup>
        </>
    )
}

export default ActivitySetting