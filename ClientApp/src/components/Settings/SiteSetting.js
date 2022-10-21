import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, CardSubtitle } from 'reactstrap';

function SiteSetting(props) {
    const [state, setState] = useState(true);

    return (
        <>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Other
            </CardSubtitle>
            <Form>
                <FormGroup switch>
                    <Input type="switch" role="switch" />
                    <Label check>Timer in title</Label>
                </FormGroup>
                <FormGroup switch>
                    <Input
                        type="switch"
                        // checked={state}
                        // onClick={() => {
                        //     setState(!state);
                        // }}
                    />
                    <Label check>
                        Notifications</Label>
                </FormGroup>
                <FormGroup switch disabled>
                    <Input type="switch" disabled />
                    <Label check>
                        Autostart</Label>
                </FormGroup>
                <FormGroup switch disabled>
                    <Input type="switch"  disabled />
                    <Label check>
                        Dark mode</Label>
                </FormGroup>
            </Form>
        </>

    );
}

export default SiteSetting;