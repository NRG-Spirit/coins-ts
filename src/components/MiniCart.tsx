import { Link } from 'react-router-dom';

import { useAppSelector } from '../utils/hooks';
import logo from '../assets/cart.svg';

export default function MiniCart() {
  const cart = useAppSelector((store) => store.user.itemsInCart);
  
  return (
    <Link to="/cart">
    <div className="miniCart">

        <img src={logo} alt="My logo" />
        {cart.length > 0
          ? <div className="miniCart_itemsAmount">{cart.length}</div>
          : ''
        }

    </div>
    </Link>
  );
}