import { useEffect, useRef, useState } from 'react'
import './MetricButtons.scss'
import { setGradusOrFarenheit } from '../../../slices/headerSearchSlice';
import { useDispatch, useSelector } from 'react-redux';


const MetricButtons = () => {
    const dispatch = useDispatch()
    const {isGradusOrFarenheit} = useSelector(state => state.headerSearchSlice)
    const metricBtnRef = useRef([]);
    const [metricBtnInfo,setMetricBtnInfo] = useState([
        {title:'°C',label:'gradus'},
        {title:'°F',label:'farenheit'}
    ])

    useEffect(() => {
       activeMetricBtn(0)
    },[])

    const activeMetricBtn = (id,label) => {
        metricBtnRef.current.forEach(item => item.classList.remove('active'))
        metricBtnRef.current[id].classList.add('active')
        dispatch(setGradusOrFarenheit(label))
    }

    const metricButtons = metricBtnInfo.map((item,i)=>{
        return(
            <>
              <button onClick={() => activeMetricBtn(i,item.label)} ref = {(el) => metricBtnRef.current[i] = el} key = {i} className='metric-button'>{item.title}</button>
            </>
        )
    })
    return (
        <>
         <div className="metric-buttons-container">
          {metricButtons}
         </div>
        </>
    )
}

export default MetricButtons