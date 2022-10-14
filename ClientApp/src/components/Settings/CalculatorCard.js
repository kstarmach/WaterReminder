import {  Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
const CalculatorCard = ({ intake, size, cups }) => {
    const cupsQuantity = () => {
        let cup = []
        for (let index = 0; index < cups; index++) {
            cup.push(<i className="bi bi-cup-straw" key={index}></i>)
        }
        return cup
    }

    return (
        <Card color="info" >
            <CardBody>
                <CardTitle tag="h5">
                    Calculator
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Daily amount
                </CardSubtitle>
                <CardText>
                    {intake} liters
                </CardText>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Daily cups of water ({size * 1000}ml)
                </CardSubtitle>
                <CardText>
                    ({cups}) {cupsQuantity()}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CalculatorCard