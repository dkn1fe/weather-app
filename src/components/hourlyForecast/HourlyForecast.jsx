import React from 'react';
import {useSelector} from 'react-redux'
import Slider from 'react-slick';
import hourlyForecastTimeIcon from '../../assets/hourlyForecastIcon/hourlyForecastTime.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HourlyForecast.scss';

const HourlyForecast = (props) => {
   const {isGradusOrFarenheit} = useSelector(state => state.headerSearchSlice)
    const { forecastData } = props;
    const temperatureSymbol = isGradusOrFarenheit === 'farenheit' ? '°F' : '°C';
    var settings = {
        dots: false,
        speed: 700,
        slidesToShow: 8,
        slidesToScroll: 6,
    };

    return (
        <div className="hourly-forecast-container">
            <div className='hourly-forecast-wrapper'>
                <div className="hourly-forecast-title">
                    <img src={hourlyForecastTimeIcon} alt="Hourly Forecast Icon" />
                    <p>Hourly forecast</p>
                </div>
                <Slider {...settings}>
                    {forecastData?.map((forecast, i) => (
                        forecast?.hour?.map((hour, index) => (
                            <div key={index} className='hourly-forecast-slide'>
                                <div className='hourly-forecast-time'>
                                    <p>{hour.time.slice(10, 16)}</p>
                                </div>
                                <div className='hourly-forecast-img'>
                                    <img src={hour.condition.icon} alt="Weather Icon" />
                                </div>
                                <div className='hourly-forecast-temp'>
                                    <p>{Math.round(isGradusOrFarenheit === 'farenheit' ? hour.temp_f : hour.temp_c)}{temperatureSymbol}</p>
                                </div>
                            </div>
                        ))
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default HourlyForecast;
