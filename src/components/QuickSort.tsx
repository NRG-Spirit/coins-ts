import { useAppDispatch } from '../utils/hooks';
import { setSort, setOrder } from '../redux/shopReducer';

export default function QuickSort () {
  const dispatch = useAppDispatch();

  function sortPriceUp(){
    dispatch(setSort('price'));
    dispatch(setOrder('asc'));
  }
  function sortPriceDown(){
    dispatch(setSort('price'));
    dispatch(setOrder('desc'));
  }
  function sortYearUp(){
    dispatch(setSort('sortingYear'));
    dispatch(setOrder('asc'));
  }
  function sortYearDown(){
    dispatch(setSort('sortingYear'));
    dispatch(setOrder('desc'));
  }

  return (
    <div className="quickSort">
      <button onClick={()=>sortPriceUp()}>Сначала дешёвые</button>
      <button onClick={()=>sortPriceDown()}>Сначала дорогие</button>
      <button onClick={()=>sortYearUp()}>Сначала старые</button>
      <button onClick={()=>sortYearDown()}>Сначала новые</button>
    </div>
);
}
