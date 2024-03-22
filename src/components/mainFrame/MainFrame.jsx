import air from '../../assets/mainFrame/air.svg'
import precipitation from '../../assets/mainFrame/precipitation.svg'
import pressure from '../../assets/mainFrame/pressure.svg'
import humidity from '../../assets/mainFrame/humidity.svg'
import './MainFrame.scss'

const MainFrame = (props) => {
   const {dataForWeather} = props
    return (
        <>
        <div className='main-frame-container'>
          <div className='frame-card'>
            <div className='content-frame'>
                 <div className='tabs-img-speed-air'>
                    <img  src={air} alt="Air"/>
                 </div>
                 <div className='tabs-frame-text'>
                    <h4>Скорость ветра</h4>
                    <div className='wind-settings'>
                    <p>{dataForWeather?.wind_kph} км/ч</p>
                    <p className='direction-wind'>{dataForWeather?.wind_dir}</p>
                    </div>
                 </div>
            </div>
          </div>
          <div className='frame-card'>
            <div className='content-frame'>
                 <div className='tabs-img-speed-air'>
                    <img  src={precipitation} alt="Air"/>
                 </div>
                 <div className='tabs-frame-text'>
                    <h4>Облачность</h4>
                    <p>{dataForWeather?.cloud} %</p>
                 </div>
            </div>
          </div>
          <div className='frame-card'>
            <div className='content-frame'>
                 <div className='tabs-img-speed-air'>
                    <img src={pressure} alt="Air"/>
                 </div>
                 <div className='tabs-frame-text'>
                    <h4>Давление</h4>
                    <p>{dataForWeather?.pressure_mb} мм рт.ст</p>
                 </div>
            </div>
          </div>
          <div className='frame-card'>
            <div className='content-frame'>
                 <div className='tabs-img-speed-air'>
                    <img  src={humidity} alt="Air"/>
                 </div>
                 <div className='tabs-frame-text'>
                    <h4>Влажность</h4>
                    <p>{dataForWeather?.humidity} мм рт.ст</p>
                 </div>
            </div>
          </div>
       </div>
    </>
    )
}

export default MainFrame