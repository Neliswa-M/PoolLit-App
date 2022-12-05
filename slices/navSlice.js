import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null
}

// set location and ETA details
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setTravelTimeInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
    },
});


export const { setDestination, setOrigin, setTravelTimeInfo } = 
  navSlice.actions;
  
  //My Selectors
  export const selectOrigin = (state) => state.nav.origin;
  export const selectDestination = (state) => state.nav.destination;
  export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

  export default navSlice.reducer;
