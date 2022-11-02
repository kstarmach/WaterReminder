import { Row, Col, Container } from 'reactstrap';

import PreferencesCard from './components/PreferencesCard/PreferencesCard';


const Settings = () => {

    return (
        <Container>
            <Row className='justify-content-center mt-4'>

                <Col sm={12} xl={5} >
         

                    <PreferencesCard />
                </Col>


            </Row>
        </Container>
    )
}

export default Settings