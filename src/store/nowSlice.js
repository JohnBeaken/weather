import { createSlice } from '@reduxjs/toolkit';

// State for current weather data
export const nowSlice = createSlice({
    name: 'now',
    initialState: {
    },
    reducers: {

        // Action to set the weather data
        setNow: (state, action) => 
            state = action.payload
    }
});

export const {setNow} = nowSlice.actions;

export default nowSlice.reducer;