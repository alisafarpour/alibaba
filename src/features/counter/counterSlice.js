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
    pershiaFilter: (state) => {
        let pershia = data.filter(item => item.label == 'فلای پرشین');
        sub = sub.concat(pershia);
        state.value = sub;
    },
    filterBackpershia: (state) => {
        sub = (sub.filter(item => !(item.label == 'فلای پرشین')));
        if ( !(sub.length == 0 )){
            state.value = sub;
        }
        
        else if (sub.length == 0){
            state.value = data;
        }
        
    },
    filterBackata: (state) => {
        sub = (sub.filter(item => !(item.label == 'آتا')));
        if ( !(sub.length == 0 )){
            state.value = sub;
        }
        
        else if (sub.length == 0){
            state.value = data;
        }
        
    },
    filterBackkas: (state) => {
        sub = (sub.filter(item => !(item.label == 'کاسپین')));
        if ( !(sub.length == 0 )){
            state.value = sub;
        }
        
        else if (sub.length == 0){
            state.value = data;
        }
    },
    filterBacksky: (state) => {
        sub = (sub.filter(item => !(item.label == 'آسمان')));
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
export const { skyFilter, kaspiyanFilter,ataFilter,filterBackata,filterBackkas,filterBacksky,defaultdata,filterBackpershia,pershiaFilter } = counterSlice.actions

export default counterSlice.reducer