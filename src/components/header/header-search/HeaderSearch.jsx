import {useState} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import search from '../../../assets/header/search.svg'
import Spinner from '../../spinner/Spinner'
import { setTextForInput,fetchDataWeather, fetchDataForecastToday,fetchDataForecast, fetchDataCitiesValues} from '../../../slices/headerSearchSlice'
import './HeaderSearch.scss'



const HeaderSearch = (props) => {
  const {isOpenMobile,setIsOpenMobile} = props;
  const {textInput,citiesValue,citiesValueStatus} = useSelector(state => state.headerSearchSlice);
  const dispatch = useDispatch();
  const isOpenCitiesList = textInput.length !== 0 || isOpenMobile ? 'active-list' : 'hide-list'

  const onChangeHandlerForm = (e) => {
    e.preventDefault();
    dispatch(setTextForInput(e.target.value));
    dispatch(fetchDataCitiesValues(e.target.value));
  };

  const handleCityClick = (cityName) => {
    dispatch(setTextForInput(cityName)); 
    dispatch(fetchDataCitiesValues(cityName));
    dispatch(fetchDataWeather(cityName));
    dispatch(fetchDataForecast(cityName));
    dispatch(fetchDataForecastToday(cityName));
    dispatch(setTextForInput(''))
    setIsOpenMobile(false)

  }

  
   const citiesValueLoading = citiesValueStatus === 'loading' ? <Spinner/> : null
   const citiesValueFound = textInput.length >= 3 && citiesValue.length === 0 ? <p className='cities-found-none'>По запросу <span>"{textInput}"</span> ничего не найдено</p> : null

  function debounce(func, delay) {
    let timeoutId;
    
    return function() {
      const context = this;
      const args = arguments;
      
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }
  const debouncedFunction = debounce(onChangeHandlerForm, 700);
  const isMobileInput = isOpenMobile ? 'active-input' : 'hide-input'

    return (
        <>
          <form  className="header-search-input">
             <input   onChange = {debouncedFunction} placeholder = 'Write City' className={`search-input ${isMobileInput}`}/>
             <img  className = 'search-img' src = {search}></img>
          </form>
          <div className={`cities-list ${isOpenCitiesList} `}>
              <div className='cities-items'>
              {citiesValueLoading}
              {citiesValueFound}
              {Array.isArray(citiesValue) && citiesValue.length !== 0 ? citiesValue.map((item, i) => (
    <h3 onClick={() => handleCityClick(item.name)}>{item.name},{item.country}</h3>
)) : null}
                </div>
          </div>
        </>
    )
}

export default HeaderSearch