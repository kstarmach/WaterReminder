import { Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
const CalculatorCard = ({ intake, size, cups }) => {
    const cupsQuantity = () => {
        let cup = []
        for (let index = 0; index < cups; index++) {
            cup.push(<i className="bi bi-cup-straw" key={index}></i>)
        }
        return cup
    }

    return (
        <Card color="info" inverse>
            <CardBody>
                <CardTitle className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'>Calculator</p>
                    <p className='text-muted align-self-center '></p>
                </CardTitle>

                <CardSubtitle
                    className="mb-2 "
                    tag="h6"
                >
                    Suggested daily amount
                </CardSubtitle>
                <CardText className='fs-2 fw-bolder'>
                    {intake} liters
                </CardText>
                <CardSubtitle
                    className="mb-2 "
                    tag="h6"
                >
                    Suggested daily cups of water ({size * 1000}ml)
                </CardSubtitle>
                <CardText className='fs-2 fw-bolder'>
                    ({cups}) {cupsQuantity()}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CalculatorCard