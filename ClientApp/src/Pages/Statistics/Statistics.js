import { Row, Col, Container } from 'reactstrap';
import DailyGoalsCard from './components/DailyGoalsCard';

const Statistics = () => {

    return (
        <Container>
            <Row className='justify-content-center mt-4'>

                <Col sm={12} xl={4} >
                <DailyGoalsCard />

                </Col>


            </Row>
        </Container>
    )
}

export default Statistics