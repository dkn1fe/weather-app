import MainFrame from "../mainFrame/MainFrame"
import HourlyForecast from '../hourlyForecast/HourlyForecast'
import SunriceSunset from "../sunriceSunset/SunriceSunset"
import './TodayWeather.scss'

const TodayWeather = (props) => {
    return (
         <>
           <div className="main-frames">
              <MainFrame dataForWeather = {props.dataForWeather} />
           </div>
           <div className="forecast">
               <HourlyForecast forecastData = {props.forecast}/>
           </div>
           <div className="sunrice-sunset">
              <SunriceSunset sunriceSunset = {props.forecast} />
           </div>
         </>
    )
}

export default TodayWeather