import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null
}

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


/*import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer */