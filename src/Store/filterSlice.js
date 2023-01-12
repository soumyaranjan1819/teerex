import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredData: [],
};

const filterSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    sort: (state, action) => {
      action.payload === 0
        ? (state.filteredData = state.filteredData.sort((a, b) => a - b))
        : (state.filteredData = state.filteredData.sort((a, b) => b - a));
    },
  },
});

export const { sort } = filterSlice.actions;
export default filterSlice.reducer;
