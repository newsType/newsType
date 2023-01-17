import {createSlice} from '@reduxjs/toolkit';



export const recipeSlice = createSlice({
    name:"recipe",
    initialState:{value:{title:0,img:"",dtl:""}},
    reducers:{
        cook:(state,action)=>{
            state.value = action.payload
        }
    }
})

export default recipeSlice.reducer;