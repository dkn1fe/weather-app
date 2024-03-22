import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    textInput: '',
    dataForTodayandWighet: [],
    forecastDataFiveDays: [],
    forecastDataToday: [],
    citiesValue:[],
    citeisValueStatus:'idle',
    isGradusOrFarenheit:'gradus',
    dataForWeatherStatus: 'idle'
    
}

export const fetchDataWeather = createAsyncThunk(
    'search/fetchDataWeather',
    async (textInput) => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=020bb90fc56f48a097a100926241703&q=${textInput}&aqi=yes`)
        return response.json()
    }
)

export const fetchDataForecast = createAsyncThunk(
    'search/fetchForecastData',
    async (textInput) => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=020bb90fc56f48a097a100926241703&q=${textInput}&days=5&aqi=yes&alerts=no`)
        return response.json()
    }
)
export const fetchDataForecastToday = createAsyncThunk(
    'search/fetchForecastDataToday',
    async (textInput) => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=020bb90fc56f48a097a100926241703&q=${textInput}&days=1&aqi=yes&alerts=no`)
        return response.json()
    }
)

export const fetchDataCitiesValues = createAsyncThunk(
    'search/fetchDataCitiesValues',
    async(textInput) => {
         const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=020bb90fc56f48a097a100926241703&q=${textInput}`)
         return response.json()
    }
)


const headerSearchSlice = createSlice({
    name: 'headerSeach',
    initialState,
    reducers: {
        setTextForInput: (state, action) => {
            state.textInput = action.payload
        },
        setGradusOrFarenheit:(state,action) => {
             state.isGradusOrFarenheit = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataWeather.pending, (state) => {
                state.dataForWeatherStatus = 'loading'
            })
            .addCase(fetchDataWeather.fulfilled, (state, action) => {
                state.dataForTodayandWighet = action.payload
                state.dataForWeatherStatus = 'idle'
            })
            .addCase(fetchDataWeather.rejected, (state) => {
                state.dataForWeatherStatus = 'error'
            })

            .addCase(fetchDataForecast.pending, (state) => {
                state.dataForWeatherStatus = 'loading'
            })
            .addCase(fetchDataForecast.fulfilled, (state, action) => {
                state.forecastDataFiveDays = action.payload
                state.dataForWeatherStatus = 'idle'
            })
            .addCase(fetchDataForecast.rejected, (state) => {
                state.dataForWeatherStatus = 'error'
            })
            .addCase(fetchDataForecastToday.pending, (state) => {
                state.dataForWeatherStatus = 'loading'
            })
            .addCase(fetchDataForecastToday.fulfilled, (state, action) => {
                state.forecastDataToday = action.payload
                state.dataForWeatherStatus = 'idle'
            })
            .addCase(fetchDataForecastToday.rejected, (state) => {
                state.dataForWeatherStatus = 'error'
            })
            .addCase(fetchDataCitiesValues.pending, (state) => {
                state.citeisValueStatus = 'loading'
            })
            .addCase(fetchDataCitiesValues.fulfilled, (state, action) => {
                state.citiesValue = action.payload
                state.citeisValueStatus = 'idle'
            })
            .addCase(fetchDataCitiesValues.rejected, (state) => {
                state.citeisValueStatus = 'error'
            })
    }
})

const { actions, reducer } = headerSearchSlice
export default reducer;
export const {
    setTextForInput,
    setGradusOrFarenheit,
} = actions