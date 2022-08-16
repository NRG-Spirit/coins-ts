import { Link } from 'react-router-dom';

import { useAppSelector } from '../utils/hooks';

import ItemPreview from './ItemPreview';

export default function GoodsList() {
  const goods = useAppSelector((state) => state.goods.goods);
  const currentCurrency = useAppSelector((state) => state.user.currentCurrency);
  
  return (
    <div className="goods">
      {goods && goods.map((item, index) => {
        return (
          <Link to={`/goods/${item.id}`} key={index} >
            <ItemPreview item={item} currentCurrency={currentCurrency}/>
          </Link>
        );
      },
      )}
    </div>
  );
}
