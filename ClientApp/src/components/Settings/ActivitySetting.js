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