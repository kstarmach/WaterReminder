import { Row, Col, Container } from 'reactstrap';

import PreferencesCard from './components/PreferencesCard/PreferencesCard';
import SettingsCard from './components/SettingsCard/SettingsCard';
import CalculatorCard from "./components/CalculatorCard"

const Settings = () => {

    return (
        <Container>
            <Row className='justify-content-center mt-4'>

                <Col sm={12} xl={4} >
                    <SettingsCard />

                    <PreferencesCard />
                </Col>

                <Col sm={12} xl={4}>
                    <CalculatorCard />
                </Col>

            </Row>
        </Container>
    )
}

export default Settings