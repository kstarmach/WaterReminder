import { Row, Col, Container } from 'reactstrap';

import SettingsCard from './components/SettingsCard/SettingsCard';
import CalculatorCard from "./components/CalculatorCard"

const Profile = () => {

    return (
        <Container>
            <Row className='justify-content-center mt-4'>

                <Col sm={12} xl={4} >
                    <SettingsCard />

                </Col>

                <Col sm={12} xl={4}>
                    <CalculatorCard />
                </Col>

            </Row>
        </Container>
    )
}

export default Profile