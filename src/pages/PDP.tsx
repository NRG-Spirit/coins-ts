import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { fetchProduct } from '../http/API';
import './PDP.css';
import ImagePreview from '../components/ImagePreview';
import { conditionColour } from '../utils/ConditionColour';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { setItemInCart, deleteItemInCart } from '../redux/userReducer';
import { Product } from '../interfaces';

function PDP() {
   const dispatch = useAppDispatch();
   const ID = useParams();
   const navigate = useNavigate();
   const [product, setProduct] = useState<Product | undefined>();
   const [fetchError, setFetchError] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const currentCurrency = useAppSelector((state) => state.user.currentCurrency);
   const itemsInCart = useAppSelector((state) => state.user.itemsInCart);
   let isItemInCart;
   let colour;

   if (product) colour = conditionColour(product.condition);

   function addItemInCart() {
      if (product)
         dispatch(setItemInCart(product));
   }

   function deleteItemFromCart() {
      if (product) dispatch(deleteItemInCart(product.id));
   }

   if (itemsInCart.find(element => element?.id === product?.id))
      isItemInCart = true;
   else
      isItemInCart = false;

   useEffect(() => {
      if (ID.id) {
      fetchProduct(ID.id)
         .then(response => {
            setProduct(response.data[0]);
            setIsLoaded(true);
         })
         .catch(error => setFetchError(error.message));
      }
   }, [ID.id]);

   if (!isLoaded) return <span>Loading...</span>;
   else if (fetchError) return <span>{fetchError}</span>;
   else if (product) {
      return (
         <div className="pdp_wrapper">
            <div className="pdp_left">
               <ImagePreview obv={product.img.obverse} rev={product.img.reverse} category={product.category} />
               <p className="pdp_description">{product.description}</p>
            </div>
            <div className="pdp_right">
               <div className="pdp_title">{product.title}</div>
               <div className="pdp_year">{product.year}</div>
               <div className="pdp_info">
                  <span className="pdp_text">Номинал:</span>   {product.denomination}</div>
               <div className="pdp_info">
                  <span className="pdp_text">Регион:</span>   {product.region}</div>
               <div className="pdp_conditionBlock">
                  <span className="pdp_text">Состояние:</span>
                  <div style={{ background: colour }} className="pdp_condition"> {product.condition}</div>
               </div>
               {product.category === 'coins' &&
                  <>
                     <div className="pdp_info">
                        <span className="pdp_text">Материал:</span>   {product.material}</div>
                     <div className="pdp_info">
                        <span className="pdp_text">Масса:</span>   {product.weight}</div>
                  </>
               }
               <div className="pdp_price">
                  <span className="pdp_text">Цена: </span>
                        {Math.round(product.price * currentCurrency.ratio * 100) / 100} {currentCurrency.label}
                  </div>
               <div className="pdp_butttons">
                  {isItemInCart
                     ? <button className="pdp_inCart" onClick={() => deleteItemFromCart()}>Убрать из корзины</button>
                     : <button className="pdp_inCart" onClick={() => addItemInCart()}>В корзину</button>
                  }
                  <button onClick={() => navigate(-1)} className="pdp_back">Назад</button>
               </div>
            </div>
         </div>
      );
   }
   else return <></>;
}
export default PDP;