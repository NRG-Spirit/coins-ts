import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../utils/hooks';
import './PLP.css';
import Aside from '../components/Aside';
import QuickSort from '../components/QuickSort';
import GoodsList from '../components/GoodsList';
import Pagination from '../components/Pagination';
import { fetchProducts } from '../http/API';
import { setGoods, setTotalCount, setGoodsError } from '../redux/goodsReducer';
import { setCategory } from '../redux/shopReducer';

interface PLPProps {
  category: string
}

function PLP(props:PLPProps) {
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector((state) => state.goods.isLoaded);
  const errorFetch = useAppSelector((state) => state.goods.error);
  const filter = useAppSelector((state) => state.shop.filter);

  useEffect(() => {
    dispatch(setCategory(props.category));
  }, [props.category, dispatch]);

  useEffect(() => {
    fetchProducts(filter)
      .then(response => {
        dispatch(setGoods(response.data));
        dispatch(setTotalCount(Number(response.headers['x-total-count'])));
      },
      )
      .catch(error => dispatch(setGoodsError(error.message)));
  }, [filter,props.category, dispatch]);
  
  if (!isLoaded) return <span>Loading...</span>;
  else if (errorFetch) return <span>{errorFetch}</span>;
  else
    return (
      <div className="shop_wrapper">
        <Aside />
        <div className="shop_goods">
          <QuickSort />
            <GoodsList />
            <Pagination />
        </div>
      </div>
    );
}

export default PLP;