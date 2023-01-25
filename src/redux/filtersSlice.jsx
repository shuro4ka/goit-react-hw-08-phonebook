import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
      setFilter: {
        reducer(state, action) {
          return (state = action.payload);
        }
      }
},
});

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
export const selectFilter = state => state.filter;