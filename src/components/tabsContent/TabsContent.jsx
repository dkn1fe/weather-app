import { useSelector } from 'react-redux';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './TabPanel/TabPanel';
import TodayWeather from '../todayWeather/TodayWeather';
import FiveDays from '../fiveDays/FiveDays';
import Spinner from '../spinner/Spinner'
import './TabsContent.scss'



const TabsWrappedLabel = () => {
   const { dataForTodayandWighet, forecastDataFiveDays } = useSelector(state => state.headerSearchSlice)
   const forecastDataTodayAbout = forecastDataFiveDays?.forecast?.forecastday?.slice(0, 1);
   const forecastDataTomorrow = forecastDataFiveDays?.forecast?.forecastday?.slice(1, 2);
   const dataForWeatherToday = forecastDataFiveDays?.forecast?.forecastday[0]?.hour[13]
   const dataForWeatherTomorrow = forecastDataFiveDays?.forecast?.forecastday[1]?.hour[13]

   const { dataForWeatherStatus } = useSelector(state => state.headerSearchSlice)


   const [value, setValue] = React.useState('one');
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <>
         <Tabs
            value={value}
            onChange={handleChange}
            
         >
            <Tab
               sx={{background: 'white',padding:'13px 30px',borderRadius:'6px'}}
               value='one'
               label='Today'
            ></Tab>
            <Tab
              sx={{ background: 'white',padding:'13px 30px',borderRadius:'6px'}}
               value='two'
               label='Tomorrow'
            ></Tab>
            <Tab
            sx={{ background: 'white',padding:'13px 30px',borderRadius:'6px'}}
               value='three'
               label='Five Days'
            ></Tab>
         </Tabs>
         <TabPanel value={value} index='one'>
            <TodayWeather forecast={forecastDataTodayAbout} dataForWeather={dataForWeatherToday} />
         </TabPanel>
         <TabPanel value={value} index='two'>
            <TodayWeather forecast={forecastDataTomorrow} dataForWeather={dataForWeatherTomorrow} />
         </TabPanel>
         <TabPanel value={value} index='three'>
            <FiveDays />
         </TabPanel>
      </>
   );
}

export default TabsWrappedLabel