import { configureStore } from '@reduxjs/toolkit'
import flightFilterReducer from '../features/flight/flightFilter'

export const store = configureStore({
  reducer: {
    flightFilter: flightFilterReducer,
  },
})