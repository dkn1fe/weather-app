import sunriceImg from './sunrice.png';
import sunsetImg from './sunset.png'
import { calculateSunriceSunsetTime, hours, increaseTimeByTenHours } from '../../layouts/DateWork'
import './SunriceSunset.scss'


const SunriceSunset = (props) => {
    const { sunriceSunset } = props
    if (!sunriceSunset || sunriceSunset.length === 0) {
        return null;
    }
    const sunsetTime = increaseTimeByTenHours(sunriceSunset[0].astro.sunset)
    return (
        <>
            <div className="sunrice-sunset-container">
                <div className="sunrice">
                    <div className='sunrice-sunset-wrapper'>
                        <div className='sunrice-about'>
                            <div className="sunrice-items">
                                <div className="sunrice-img">
                                    <img src={sunriceImg}></img>
                                </div>
                                <div className='sunrice-title'>
                                    <h4>Восход</h4>
                                    {sunriceSunset.map((item, i) => (
                                    <p>{item.astro.sunrise.slice(0,6)}</p>
                                    ))}
                                </div>
                            </div>
                            <div className='sunrice-time'>
                                {sunriceSunset?.map((item, i) => (
                                    <p>{calculateSunriceSunsetTime(item?.astro?.sunrise?.slice(0, 2), hours)}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sunset">
                    <div className='sunrice-sunset-wrapper'>
                        <div className='sunset-about'>
                            <div className="sunset-items">
                                <div className="sunset-img">
                                    <img src={sunsetImg}></img>
                                </div>
                                <div className='sunset-title'>
                                    <h4>Закат</h4>
                                    <p>{sunriceSunset?.map((item, i) => (
                                        increaseTimeByTenHours(item?.astro?.sunset?.slice(0,6))
                                    ))}</p>
                                </div>
                            </div>
                            <div className='sunset-time'>
                                {sunriceSunset?.map((item, i) => (
                                    <p>{calculateSunriceSunsetTime(sunsetTime.slice(0,2), hours)}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SunriceSunset