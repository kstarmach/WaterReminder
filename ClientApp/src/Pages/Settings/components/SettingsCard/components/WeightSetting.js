import { CardSubtitle, FormGroup, Label, Input } from 'reactstrap';
import RangeSlider from 'react-bootstrap-range-slider';

const WeightSetting = ({ handleChange, weight }) => {
    return (
        <>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Weight
            </CardSubtitle>

            <FormGroup >
                {/* <Label for="exampleRange">
                    {weight} kg
                </Label> */}
                {/* <Input
                    id="exampleRange"
                    name="range"
                    type="range"
                    value={weight}
                    onChange={handleChange}
                    min={25}
                    max={150}
                /> */}
                <RangeSlider
                    value={weight}
                    onChange={handleChange}
                    min={25}
                    max={150}
                    tooltip='on'

                    tooltipPlacement='top'
                    tooltipLabel={v => `${v} kg`}
                    //onChange={changeEvent => setValue(changeEvent.target.value)}
                    className='mt-3'
                />
            </FormGroup>
        </>
    )
}

export default WeightSetting