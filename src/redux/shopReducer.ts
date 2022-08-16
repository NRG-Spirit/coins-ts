import { createSlice } from '@reduxjs/toolkit';

import { Filter} from '../interfaces';

import type { PayloadAction } from '@reduxjs/toolkit';

type Shop={
   filter:Filter
   regions: string[]
   categories: string[]
}

const initialState:Shop = {
   filter: {
      _page: 1,
      _limit: 6,
      _sort: '',
      _order: '',
      category: '',
      region: '',
      condition: '',
   },
   regions:[],
   categories:[],
};

const shopSlice = createSlice({
   name: 'shop',
   initialState,
   reducers: {
      setPage: (state, action:PayloadAction<number>) => {
         state.filter._page = action.payload;
      },
      setLimit: (state, action:PayloadAction<number>) => {
         state.filter._limit = action.payload;
      },
      setSort: (state, action:PayloadAction<string>) => {
         state.filter._sort = action.payload;
         state.filter._page = 1;
      },
      setOrder: (state, action:PayloadAction<string>) => {
         state.filter._order = action.payload;
         state.filter._page = 1;
      },
      setRegion: (state, action:PayloadAction<string>) => {
         state.filter.region = action.payload;
         state.filter._page = 1;
      },
      setCondition: (state, action:PayloadAction<string>) => {
         state.filter.condition = action.payload;
         state.filter._page = 1;
      },
      setCategory: (state, action:PayloadAction<string>) => {
         state.filter.category = action.payload;
         state.filter._page = 1;
         state.filter.region = '';
         state.filter.condition = '';
      },
   },
});
export const { setPage, setLimit, setSort, setOrder, setRegion, setCondition, setCategory } = shopSlice.actions;
export default shopSlice.reducer;