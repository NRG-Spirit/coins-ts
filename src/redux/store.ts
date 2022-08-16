import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userReducer';
import goodsReducer from './goodsReducer';
import shopReducer from './shopReducer';

export const store = configureStore({
  reducer: {
   goods:goodsReducer,
   user:userReducer,
   shop:shopReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch