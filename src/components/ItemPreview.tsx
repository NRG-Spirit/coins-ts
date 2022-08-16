import { conditionColour } from '../utils/ConditionColour';
import { Product, CurrencyType } from '../interfaces';

interface ItemPreviewProps {
  item: Product
  currentCurrency: CurrencyType
}

export default function ItemPreview(props: ItemPreviewProps) {
  const colour = conditionColour(props.item.condition);

  return (
    <div className="itemPreview_wrapper">
      {props.item.category === 'coins'
        ? <div className="itemPreview_imgs">
          <img src={props.item.img.obverse} alt="" />
          <img src={props.item.img.reverse} alt="" />
          <div className="itemPreview_condition" style={{ background: colour }}>{props.item.condition}</div>
        </div>
        : <div className="itemPreviewBone_imgs">
          <img src={props.item.img.obverse} alt="" />
          <div className="itemPreview_condition" style={{ background: colour }}>{props.item.condition}</div>
        </div>
      }
      <div className="itemPreview_infoBlock">
        <div className="itemPreview_info">
          <p className="itemPreview_year">{props.item.year}</p>
          <p className="itemPreview_title">{props.item.title}</p>
          <p>{props.item.material}</p>
        </div>
        <div className="itemPreview_buy">
          <span className="itemPreview_price">
            {Math.round(props.item.price * props.currentCurrency.ratio * 100) / 100} {props.currentCurrency.label}
          </span>
        </div>
      </div>
    </div>
  );
}
