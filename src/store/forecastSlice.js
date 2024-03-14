import { createSlice } from '@reduxjs/toolkit';

// State for weather forecast
export const forecastSlice = createSlice({
    name: 'forecast',
    initialState: [],
    reducers: {

        // Action to reset the state
        resetForecast: (state) =>
            state = [],

        // Action to add new forecast data
        addForecast: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {resetForecast, addForecast} = forecastSlice.actions;

export default forecastSlice.reducer;