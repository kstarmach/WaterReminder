import { CardSubtitle, FormGroup, Input } from 'reactstrap';
const NotificationSound = ({ handleChange, value }) => {
    return (
        <>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Notification Sound
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
                        PomuReminder
                    </option>
                    <option value={0.25}>
                        Basic ringtone
                    </option>
                </Input>
            </FormGroup>
        </>
    )
}

export default NotificationSound