import { createSlice } from "@reduxjs/toolkit"

initialState = {
    originalData : [''],
    filteredData : []
}

const filterSlice = createSlice({
    name : "data",
    initialState,
    reducers:{
    }
})