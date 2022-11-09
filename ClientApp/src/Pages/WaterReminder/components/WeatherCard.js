import { useEffect, useState } from "react"
import { Card, CardBody, CardTitle, Spinner } from 'reactstrap';
import axios from "axios"



const WeatherCard = () => {
    const [weather, setWeather] = useState({})
    const [temp, setTemp] = useState(20)



    const getWeather = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=51.18&lon=17.43&appid=b8bb02d3b20864831747b0baa7ada93e&units=metric`)
            .then(response => {
                setWeather(response.data)
                setTemp(response.data.main.temp)
            })
    }


    useEffect(() => {
        getWeather()

    }, [])


    const getBackground = () => {
        if (temp > 27) {
            return '#f40000'
        }
        if (temp > 21) {
            return '#f09649'
        }
        if (temp > 16) {
            return '#fac312'
        }
        if (temp > 10) {
            return '#96d254'
        }
        if (temp > 4) {
            return '#30b053'
        }
        if (temp > -1) {
            return '#3796fd'
        }
        if (temp > -7) {
            return '#3f23fd'
        }
        if (temp > -12) {
            return '#6e2ba0'
        }
        if (temp > -18) {
            return '#940097'
        }
        return ''
    }

    return (
        <Card style={{ backgroundColor: `${getBackground()}`, borderColor: `${getBackground()}` }}>
            <CardBody>

                <CardTitle>
                    {Object.keys(weather).length === 0 ?
                        <>
                            <Spinner color="primary">
                                Loading...
                            </Spinner>
                        </>
                        :
                        <>
                            <p className='fs-4 '>It is <b>{weather.weather[0].main} </b> today!</p>
                            <p className='fs-2 fw-bolder' > <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={"weather"} />{temp} °C</p>
                        </>
                    }
                </CardTitle>

            </CardBody>
        </Card >
    )
}

export default WeatherCard
