import { Card, CardBody, CardTitle } from 'reactstrap';
import SiteSetting from './components/SiteSetting';
import SizeSetting from "./components/SizeSetting"
import NotificationSound from './components/NotificationSound';



const PreferencesCard = () => {


    return (
        <Card className='pb-1 shadow'>

            <CardBody>

                <CardTitle className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'> Settings</p>
                    <p className='text-muted align-self-center '></p>
                </CardTitle>

                <SizeSetting  />

                <NotificationSound />

                <SiteSetting />
            </CardBody>
        </Card>
    )
}

export default PreferencesCard