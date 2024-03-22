import { useEffect } from 'react';
import weatherIcon from '../../assets/widget/iconWeatherWidget.svg';
import { fetchDataForecast, fetchDataForecastToday, fetchDataWeather } from '../../slices/headerSearchSlice';
import { useSelector, useDispatch } from 'react-redux'
import { months } from '../../layouts/DateWork';
import './Widget.scss'


const Widget = () => {
    const { dataForTodayandWighet,isGradusOrFarenheit } = useSelector(state => state.headerSearchSlice)
    const temperatureSymbol = isGradusOrFarenheit === 'farenheit' ? '°F' : '°C';
    const dispatch = useDispatch()
    const name = 'Moscow'
    useEffect(() => {
        dispatch(fetchDataWeather(name))
        dispatch(fetchDataForecast(name))
        dispatch(fetchDataForecastToday(name))
    }, [])
    return (
        <>
            <div className="widget">
                <div className="widget-container">
                    <div className='widget-text'>
                        <div className="widget-name-country">
                            <span>{dataForTodayandWighet?.location?.name}, {dataForTodayandWighet?.location?.country}</span>
                        </div>
                        <div className="widget-wrapper">
                            <div className="widget-temperature">
                                <h3 className="temperature">{Math.round(isGradusOrFarenheit === 'farenheit' ? dataForTodayandWighet?.current?.temp_f  : dataForTodayandWighet?.current?.temp_c)} {temperatureSymbol}</h3>
                                <h3 className="real-temperarute">Ощущается {Math.round(isGradusOrFarenheit === 'farenheit' ? dataForTodayandWighet?.current?.feelslike_f  : dataForTodayandWighet?.current?.feelslike_c )} {temperatureSymbol}</h3>
                            </div>
                            <div className="widget-weather">
                                <img  src={dataForTodayandWighet?.current?.condition.icon} className="weather-icon" />
                                <h3 className="weather-name">{dataForTodayandWighet?.current?.condition?.text}</h3>
                            </div>
                        </div>
                        <div className="widget-date">
                            <h3>{months[dataForTodayandWighet?.location?.localtime.slice(6,7) - 1 ]} {dataForTodayandWighet?.location?.localtime?.slice(8,10)},{dataForTodayandWighet?.location?.localtime?.slice(10,16)}</h3>
                            <div className="widget-time">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Widget;