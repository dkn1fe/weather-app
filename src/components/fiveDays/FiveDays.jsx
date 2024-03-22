import { useSelector } from 'react-redux';
import { months } from '../../layouts/DateWork'
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import HourlyForecast from '../hourlyForecast/HourlyForecast'
import MainFrame from '../mainFrame/MainFrame'

import './FiveDays.scss'

const FiveDays = () => {
  const { forecastDataFiveDays } = useSelector(state => state.headerSearchSlice)
   
  return (
    <>
      {forecastDataFiveDays?.forecast?.forecastday?.map((item, i) => (
        <Accordion sx={{ maxWidth: 500, marginTop: '20px', borderRadius: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <div className='time-weather'>
              <div className='date-weather'>
                <div className='date'>
                  <span>{item.date.slice(8, 10)}</span>
                  <span>{months[item.date.slice(6, 7) - 1]}</span>
                </div>
                <div className='weather-five-days'>
                  <p>{item.day.condition.text}</p>
                </div>
              </div>
              <div className='temp-five-days'>
                <img src={item.day.condition.icon}></img>
              </div>
            </div>
          </AccordionSummary>
          {item.hour?.slice(12,13).map((hour, index) => (
            <AccordionDetails key = {index}>
               <div className='frame'>
                  <MainFrame dataForWeather = {hour}/>
               </div>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </>
  )
}

export default FiveDays;