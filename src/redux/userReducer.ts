import { createSlice } from '@reduxjs/toolkit';

import { Product, UserData, CurrencyType } from '../interfaces';

import type { PayloadAction } from '@reduxjs/toolkit';

type User = {
   data: UserData
   itemsInCart: Product[]
   exchangeRates: CurrencyType[]
   error?: string
   currentCurrency: CurrencyType
}

const initialState: User = {
   data: {
      email: '',
      name: '',
      confirmationPassword: '',
      id: '',
      password: '',
   },
   itemsInCart: [],
   exchangeRates: [],
   error: '',
   currentCurrency: {
      'currency': 'USD',
      'label': '$',
      'ratio': 1,
   },
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUserData: (state, action: PayloadAction<UserData>) => {
         state.data = (action.payload);
      },
      UserLogOut: (state) => {
         state.data.email = '';
         state.data.name = '';
         state.data.confirmationPassword = '';
         state.data.id = '';
      },
      setItemInCart: (state, action: PayloadAction<Product>) => {
         state.itemsInCart.push(action.payload);
      },
      deleteItemInCart: (state, action: PayloadAction<string>) => {
         state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload);
      },
      setExchangeRates: (state, action: PayloadAction<CurrencyType[]>) => {
         state.exchangeRates = (action.payload);
      },
      setError: (state, action: PayloadAction<string>) => {
         state.error = (action.payload);
      },
      setCurrentCurrency: (state, action: PayloadAction<CurrencyType>) => {
         state.currentCurrency = (action.payload);
      },
   },
});
export const {
   setUserData,
   UserLogOut,
   setItemInCart,
   deleteItemInCart,
   setExchangeRates,
   setError,
   setCurrentCurrency,
} = userSlice.actions;
export default userSlice.reducer;