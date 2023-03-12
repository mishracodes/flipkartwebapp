import { createSlice } from "@reduxjs/toolkit";

const initialState={menuSmStatus:false};

const uiSlice=createSlice({
    name:'ui',
    initialState,
    reducers:{
        toggleSmMenu(state) {
          state.menuSmStatus=!state.menuSmStatus
          console.log('clice',state.menuSmStatus);
          
        }
    }
})
export const uiAction = uiSlice.actions;

export default uiSlice.reducer;