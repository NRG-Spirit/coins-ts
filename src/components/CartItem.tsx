import { useAppDispatch } from '../utils/hooks';
import { deleteItemInCart } from '../redux/userReducer';
import { Product, CurrencyType} from '../interfaces';

interface CartItemProps {
  product: Product
  currentCurrency:CurrencyType
}

export default function CartItem(props:CartItemProps) {
  const dispatch = useAppDispatch();

  function deleteItemFromCart() {
    dispatch(deleteItemInCart(props.product.id));
 }

  return (
    <div className="cartItem_wrapper">
      <div className="cartItem_left">
        <div className="cartItem_title">{props.product.title}</div>
        <div className="cartItem_year">{props.product.year}</div>
        <div className="cartItem_region">{props.product.region}</div>
        <div className="cartItem_material">{props?.product?.material}</div>
      </div>
      <div className="cartItem_right">
        <div className="cartItem_price">
          {Math.round(props.product.price*props.currentCurrency.ratio * 100) / 100} {props.currentCurrency.label}
          </div>
        <div className="cartItem_image">
          <img src={props.product.img.obverse} alt="" />
        </div>
        <button className="cartItem_delete" onClick={() => deleteItemFromCart()}>X</button>
      </div>
    </div>
  );
}