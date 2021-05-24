import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { countriesAPI } from './../api/api';

const initialState = {
  data: [],
  isLoading: true,
};

const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await countriesAPI.getCountries();
  return response;
});

export const counterSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export { getCountries };
export default counterSlice.reducer;
