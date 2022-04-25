import { createSlice } from '@reduxjs/toolkit'
import Data from '../../Data/Data.js'

const initialState = {
  value: Data(),
}
let sub = [] ;
let data = Data() ;
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    skyFilter: (state) => {
        let sky = data.filter(item => item.label == 'آسمان');
        sub = sub.concat(sky);
        state.value = sub;
        
    },
    kaspiyanFilter: (state) => {
        let kas = data.filter(item => item.label == 'کاسپین');
        sub = sub.concat(kas);
        state.value = sub;
    },
    ataFilter: (state) => {
        let ata = data.filter(item => item.label == 'آتا');
        sub = sub.concat(ata);
        state.value = sub;
    },
    filterBackata: (state) => {
        sub = (sub.filter(item => !(item.label == 'آتا')));
        if ( !(sub.length == 0 )){
            state.value = sub;
        }
        
        else if (sub.length == 0){
            state.value = data;
            console.log('hey')
        }
        
    },
    filterBackkas: (state) => {
        sub = (sub.filter(item => !(item.label == 'کاسپین')));
        if ( !(sub.length == 0 )){
            state.value = sub;
        }
        
        else if (sub.length == 0){
            state.value = data;
            console.log('hey')
        }
    },
    filterBacksky: (state) => {
        sub = (sub.filter(item => !(item.label == 'آسمان')));
        if ( !(sub.length == 0 )){
            state.value = sub;
        }
        
        else if (sub.length == 0){
            state.value = data;
            console.log('hey')
        }
    },
    defaultdata: (state) => {
        state.value = data;
    },

  },
})

// Action creators are generated for each case reducer function
export const { skyFilter, kaspiyanFilter,ataFilter,filterBackata,filterBackkas,filterBacksky,defaultdata } = counterSlice.actions

export default counterSlice.reducer