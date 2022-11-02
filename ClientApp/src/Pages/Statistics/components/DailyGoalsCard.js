import { Card, CardBody, CardTitle, CardText, Label, Col, Button, Row } from 'reactstrap';
import { useEffect, useState } from 'react';


const PercentageIcon = ({ percentage }) => {
    if (percentage < 35) {
        return (
            <i className="bi bi-droplet  fs-1 "></i>
        )
    }
    if (percentage > 35 && percentage < 85) {
        return (
            <i className="bi bi-droplet-half  fs-1 "></i>
        )
    }
    if (percentage > 85) {
        return (
            <i className="bi bi-droplet-fill  fs-1 "></i>
        )
    }
}

const WeekDay = ({ day, percentage }) => {

    console.log(percentage);

    const d = new Date(Date.now());
    let currentDay = d.getDay() + 3

    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Tue";
    weekday[2] = "Wed";
    weekday[3] = "Thu";
    weekday[4] = "Fri";
    weekday[5] = "Sat";
    weekday[6] = "Mon";

    const wd = weekday[day]

    return (
        <Col className={`d-flex flex-column text-center 
        ${(day === currentDay) ? 'text-info' : ''}
        ${(day < currentDay) ? 'text-primary' : ''}
        ${(day > currentDay) ? 'text-muted' : ''}
        `}>
            <Label >{percentage}%</Label>

            <PercentageIcon percentage={percentage} />
            <Label>{wd}</Label>
        </Col>
    )



}

const UpdateWeek = () => {
    const d = new Date(Date.now());
    let cd = d.getDay()

    const currentAmount = localStorage.getItem('water_count') || 0

    const currentWeek = JSON.parse(localStorage.getItem('current_week') || "[]")


    const per = Math.floor((currentAmount / 2500) * 100)
    const newCurrentDay = [
        {
            day: cd,
            percentage: per
        }
    ]

    currentWeek[cd] = newCurrentDay;



    localStorage.setItem('current_week', JSON.stringify(currentWeek))
}

// const UpdateHistory = () => {
//     const newitems = JSON.parse(localStorage.getItem("history_array") || "[]");

//     var d = new Date();
//     newitems.unshift({
//         'date': `${new Date(Date.now()).toLocaleDateString()}`,
//         'week': JSON.stringify(testWeek)
//     })


//     localStorage.setItem('history_array', JSON.stringify(newitems))
// }

const DailyGoalsCard = () => {
    const [week, setWeek] = useState([])


    useEffect(() => {
        UpdateWeek()
        setWeek(JSON.parse(localStorage.getItem("current_week") || "[]"))
    }, [localStorage.getItem("water_count")])

    return (
        <Card >
            <CardBody>
                <CardTitle className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'>Daily goals</p>

                </CardTitle>
                {/* <Row className='fs-6 fw-bold'>
                    {(week.length > 0) ?
                        week.map((item, index) =>

                            <WeekDay
                                day={item[index].day}
                                percentage={item[index].percentage}
                                key={index}
                            />

                        ) : ''}
                </Row> */}



            </CardBody>
        </Card>
    )
}

export default DailyGoalsCard

