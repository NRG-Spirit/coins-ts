import { useAppSelector } from '../utils/hooks';
import CartItem from '../components/CartItem';
import './Cart.css';

function Cart() {
   const cart = useAppSelector((store) => store.user.itemsInCart);
   const currentCurrency = useAppSelector((state) => state.user.currentCurrency);

   const totalPrice = cart.reduce((accum, item) => {
      return accum = accum + item.price;
   }, 0);

   return (
      <div className="cart_wrapper">
         {cart.length === 0
            ? <p>Ваша корзина пуста</p>
            : cart.map((product, index) => {
               return (
                  <CartItem key={index} product={product} currentCurrency={currentCurrency} />
               );
            })
         }
         {cart.length > 0 && <div className="cart_confirmation">
            <div className="cart_totalTitle">Total:</div>
            <div className="cart_total">
               <div className="cart_totalPrice">
                  {Math.round(totalPrice * currentCurrency.ratio * 100) / 100} {currentCurrency.label}
               </div>
               <button className="cart_confirmBTN">Оформить</button>
            </div>
         </div>}
      </div>
   );
}

export default Cart;