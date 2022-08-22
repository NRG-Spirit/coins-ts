import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

import App from './App';

import { store } from './redux/store';

import goodsSlice, { setGoods, setGoodsError, setTotalCount } from './redux/goodsReducer';
import shopSlice, { setPage, setLimit, setSort, setOrder, setRegion, setCondition } from './redux/shopReducer';

import { fetchProducts, fetchExchangeRates } from './http/API';


test('renders App component', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>);
});

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    </Provider>,
  );
  expect(screen.getByText(/PAGE NOT FOUND/i)).toBeInTheDocument();
});

describe('reducers', () => {
  it('setGoods', () => {
    const state = store.getState().goods;
    const nextState = goodsSlice(state, setGoods([
      {
        id: 'sd',
        category: 'qwe',
        title: 'asd',
        year: 'asdf',
        sortingYear: 2022,
        denomination: 'gfd',
        region: 'vhgf',
        condition: 'zxc',
        material: 'cxz',
        weight: 'xcv',
        description: 'vcx',
        price: 322,
        img: { obverse: 'string', reverse: 'lkj' },
      },
    ],
    ));
    expect(nextState.goods).toStrictEqual([{
      id: 'sd',
      category: 'qwe',
      title: 'asd',
      year: 'asdf',
      sortingYear: 2022,
      denomination: 'gfd',
      region: 'vhgf',
      condition: 'zxc',
      material: 'cxz',
      weight: 'xcv',
      description: 'vcx',
      price: 322,
      img: { obverse: 'string', reverse: 'lkj' },
    }]);
  });
  it('setGoodsError', () => {
    const state = store.getState().goods;
    const nextState = goodsSlice(state, setGoodsError('1, 2, 3'));
    expect(nextState.error).toStrictEqual('1, 2, 3');
  });
  it('setTotalCount', () => {
    const state = store.getState().goods;
    const nextState = goodsSlice(state, setTotalCount(7));
    expect(nextState.totalCount).toBe(7);
  });
  it('setPage', () => {
    const state = store.getState().shop;
    const nextState = shopSlice(state, setPage(37));
    expect(nextState.filter._page).toBe(37);
  });
  it('setLimit', () => {
    const state = store.getState().shop;
    const nextState = shopSlice(state, setLimit(21));
    expect(nextState.filter._limit).toBe(21);
  });
  it('setSort', () => {
    const state = store.getState().shop;
    const nextState = shopSlice(state, setSort('obb'));
    expect(nextState.filter._sort).toBe('obb');
    expect(nextState.filter._page).toBe(1);
  });
  it('setOrder', () => {
    const state = store.getState().shop;
    const nextState = shopSlice(state, setOrder('zxc'));
    expect(nextState.filter._order).toBe('zxc');
    expect(nextState.filter._page).toBe(1);
  });
  it('setRegion', () => {
    const state = store.getState().shop;
    const nextState = shopSlice(state, setRegion('zxc'));
    expect(nextState.filter.region).toBe('zxc');
    expect(nextState.filter._page).toBe(1);
  });
  it('setCondition', () => {
    const state = store.getState().shop;
    const nextState = shopSlice(state, setCondition('zxc'));
    expect(nextState.filter.condition).toBe('zxc');
    expect(nextState.filter._page).toBe(1);
  });
});

describe('fetchExchangeRates', () => {
  it('fetches data successfully from an api', () => {
    const rates = [
      {
        'currency': 'USD',
        'label': '$',
        'ratio': 1,
      },
      {
        'currency': 'EUR',
        'label': '€',
        'ratio': 0.98,
      },
      {
        'currency': 'UAH',
        'label': '₴',
        'ratio': 37,
      },
      {
        'currency': 'GBP',
        'label': '£',
        'ratio': 0.83,
      },
    ] ;
      return fetchExchangeRates().then(resp => expect(resp.data).toEqual(rates));
  });
});