import { useState } from 'react';

interface ImagePreviewProps {
   obv : string
   rev : string
   category : string
 }

export default function ImagePreview(props:ImagePreviewProps) {
   const [images, setImages] = useState([props.obv, props.rev]);

   function changeImage() {
      const newArray = [images[1], images[0]];
      setImages(newArray);
   }

   return (
      <>
         {(props.category === 'coins') &&
            <div className="pdpCoin_img">
               <img src={images[0]} alt="" className="pdpCoin_mainImg" />
               <img src={images[1]} alt="" className="pdpCoin_additionalImg" onClick={() => changeImage()} />
            </div>
         }
         {(props.category === 'bondes') &&
            <div className="pdp_img">
               <img src={images[0]} alt="" className="pdp_mainImg" />
               <img src={images[1]} alt="" className="pdp_mainImg" />
            </div>
         }
      </>
   );
}