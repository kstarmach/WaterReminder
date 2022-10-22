import { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import SiteSetting from './components/SiteSetting';
import SizeSetting from "./components/SizeSetting"
import NotificationSound from './components/NotificationSound';



const PreferencesCard = () => {
    const [size, setSize] = useState(0.250)

    return (
        <Card className='pb-1'>

            <CardBody>

                <CardTitle className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'> Preferences</p>
                    <p className='text-muted align-self-center '></p>
                </CardTitle>

                <SizeSetting handleChange={(event) => setSize(event.target.value)} size={size} />

                <NotificationSound />

                <SiteSetting />
            </CardBody>
        </Card>
    )
}

export default PreferencesCard