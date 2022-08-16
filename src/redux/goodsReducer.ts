import { createSlice } from '@reduxjs/toolkit';

import { Product} from '../interfaces';

import type { PayloadAction } from '@reduxjs/toolkit';

type Goods={
   goods?:Product[]
   totalCount: number
   isLoaded: boolean,
   error:string
}
const initialState:Goods= {
   goods: [],
   totalCount: 0,
   isLoaded: false,
   error:'',
};

const goodsSlice = createSlice({
   name: 'goods',
   initialState,
   reducers: {
      setGoods: (state, action:PayloadAction<Product[]>) => {
         state.goods = action.payload;
         state.isLoaded = true;
      },
      setGoodsError: (state, action:PayloadAction<string>) => {
         state.error = action.payload; 
         state.isLoaded = true;
      },
      setTotalCount: (state, action:PayloadAction<number>) => {
         state.totalCount = action.payload; 
      },
   },
});
export const { setGoods, setGoodsError, setTotalCount } = goodsSlice.actions;
export default goodsSlice.reducer;