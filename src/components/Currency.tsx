import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { setCurrentCurrency } from '../redux/userReducer';

import type { CurrencyType} from '../interfaces';

export default function Currency() {
  const currency = useAppSelector((state) => state.user.currentCurrency);
  const exchangeRates = useAppSelector((state) => state.user.exchangeRates);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  function handleCurrency(e: React.MouseEvent<HTMLElement>, item:CurrencyType) {
    e.stopPropagation();
    dispatch(setCurrentCurrency(item));
    setIsOpen(false);
  }

  return (
    <div className="currency_wrapper">
      <button className="currency" onClick={() => { setIsOpen(!isOpen); }}>{currency.label} {currency.currency}</button>
      {isOpen &&
        <div className="currency_switch">
          {exchangeRates.map((item, index) => {
            return (
              <div key={index} className="currency_item" onClick={(e) => { handleCurrency(e, item); }}>
                {item.label} {item.currency}
                </div>
            );
          },
          )}
        </div>
      }
    </div>
  );
}