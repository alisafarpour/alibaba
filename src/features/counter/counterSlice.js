import { createSlice } from '@reduxjs/toolkit'
import Data from '../../Data/Data.js'

const initialState = {
  value: Data(),
}
let sub = [] ;
let subcombine = [];
let data = Data() ;
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    skyFilter: (state , action) => {
        let sky = data.filter(item => (item.label == action.payload));
        sub = sub.concat(sky);
        state.value = sub;
        
    },
    
    filterBacksky: (state, action) => {
        sub = (sub.filter(item => (!(item.label == action.payload))));
        if ( !(sub.length == 0 )){
            state.value = sub;
        }
        
        else if (sub.length == 0){
            state.value = data;
        }
    },
    

  },
})

// Action creators are generated for each case reducer function
export const { skyFilter, filterBacksky} = counterSlice.actions

export default counterSlice.reducer