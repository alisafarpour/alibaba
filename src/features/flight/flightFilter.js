import { createSlice } from '@reduxjs/toolkit';
import { airlinesName } from '../../Data/data.js';

const initialState = {
  value: airlinesName ,
}

let sub = [] ;
let subcombine = [];
let data = airlinesName ;


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    suggestion: (state , action) => {
      let suggest = data.filter(item => (item.suggest === action.payload));
      let nonsuggest = data.filter(item => !(item.suggest === action.payload));
      sub = sub.concat(suggest);
      sub = sub.concat(nonsuggest);
      state.value = sub;   
  },
    flightFilter: (state , action) => {
        let flight = data.filter(item => (item.label === action.payload));
        sub = sub.concat(flight);
        state.value = sub;   
    },
    
    filterBack: (state, action) => {
        sub = (sub.filter(item => (!(item.label === action.payload))));
        if( !(sub.length === 0 )){
            state.value = sub;
        }else{
            state.value = data;
        }
    },
    
    ticketFilter: (state , action) => {
        let ticket = data.filter(item => (item.ticketKind === action.payload));
        sub = sub.concat(ticket);
        state.value = sub;
        
    },
    ticketFilterBack: (state , action) => {
      sub = (sub.filter(item => (!(item.ticketKind === action.payload))));
        if( !(sub.length === 0 )){
            state.value = sub;
        }else{
            state.value = data;
        }
      
  },
  },
})

export const { flightFilter, filterBack, ticketFilter, ticketFilterBack, suggestion} = counterSlice.actions

export default counterSlice.reducer