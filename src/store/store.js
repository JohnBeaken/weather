import { configureStore } from '@reduxjs/toolkit';
import nowReducer from './nowSlice.js';
import forecastReducer from './forecastSlice.js';

export default configureStore({
    reducer: {
        now: nowReducer,
        forecast: forecastReducer
    }
});