import { createSlice } from '@reduxjs/toolkit'
import { airlinesName } from '../../Data/Data.js'

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

    flightFilter: (state , action) => {
        let flight = data.filter(item => (item.label == action.payload));
        sub = sub.concat(flight);
        state.value = sub;   
    },
    
    filterBack: (state, action) => {
        sub = (sub.filter(item => (!(item.label == action.payload))));
        if( !(sub.length == 0 )){
            state.value = sub;
        }else{
            state.value = data;
        }
    },
    
    ticketFilter: (state , action) => {
        let ticket = data.filter(item => (item.ticketKind == action.payload));
        
        // const findDuplicates = (arr) => {
        //     let sorted_arr = arr.slice().sort(); 
        //     let results = [];
        //     for (let i = 0; i < sorted_arr.length - 1; i++) {
        //       if (sorted_arr[i + 1] == sorted_arr[i]) {
        //         results.push(sorted_arr[i]);
        //       }
        //     }
        //     return results;
        //   }
        //   let Repeated = findDuplicates(inputs) ;
        //   uniqueArray = Repeated.filter(function(item, pos) {
        //       return Repeated.indexOf(item) == pos;
        //   })

        sub = sub.concat(ticket);
        state.value = sub;
        
    },
  },
})

export const { flightFilter, filterBack, ticketFilter} = counterSlice.actions

export default counterSlice.reducer