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
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
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
export const {
  // increment, decrement, incrementByAmount
} = counterSlice.actions;
export default counterSlice.reducer;
