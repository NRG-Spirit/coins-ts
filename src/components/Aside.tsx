import { useEffect, useState } from 'react';

import { fetchRegions, fetchConditions } from '../http/API';
import { useAppDispatch } from '../utils/hooks';
import { setRegion, setCondition } from '../redux/shopReducer';

export default function Aside() {
  const dispatch = useAppDispatch();
  const [regions, setRegions] = useState([]);
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    fetchRegions()
      .then(response => { setRegions(response.data); });
    fetchConditions()
      .then(response => { setConditions(response.data); });
  }, []);

  function sortRegion(e: { target: HTMLInputElement; }) {
    dispatch(setRegion(e.target.value));
  }
  function sortCondition(e: { target: HTMLSelectElement; }) {
    dispatch(setCondition(e.target.value));
  }
  function clearFilter() {
    dispatch(setCondition(''));
    dispatch(setRegion(''));
    const select = document.querySelector('select') as HTMLSelectElement | null;
    if (select != null) {
      select.value = '';
    }
    const input = document.querySelector('input[name="region"]:checked') as HTMLInputElement | null;
    if (input != null) {
      input.checked = false;
    }
  }

  return (
    <div className="aside">
      <div className="aside_sorting">Регион:</div>
      <label className="aside_radio">
        <input type="radio" name="region" value="" onChange={(e) => sortRegion(e)} />Все
      </label>
      {regions.map((item, index) => {
        return (
          <label key={index} className="aside_radio">
            <input type="radio" name="region" className="aside_radio" value={item} onChange={(e) => sortRegion(e)} />
            {item}
          </label>
        );
      })}
      <div>
        <div className="aside_sorting">Состояние:</div>
        <select onChange={(e) => sortCondition(e)}>
          <option value="">Все</option>
          {conditions.map((item, index) => {
            return (
              <option key={index} value={item}>{item}</option>
            );
          },
          )}
        </select>
      </div>
      <button className="aside_sorting aside_btn" onClick={() => clearFilter()}>Очистить фильтр</button>
    </div>
  );
}
