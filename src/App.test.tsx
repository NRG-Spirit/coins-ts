import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

import App from './App';

import { store } from './redux/store';

test('renders App component', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
});



test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';
  render(

    <MemoryRouter initialEntries={[badRoute]}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter >,
  );
  expect(screen.getByText(/PAGE NOT FOUND/i)).toBeInTheDocument();
});

/*
test('app navigating', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/history']}>
        <App />
      </MemoryRouter>
    </Provider>,
  )
  expect(screen.getByText(/History/i)).toBeInTheDocument()
})

describe('reducers', () => {
  it('returns initial state', () => {
    const nextState = horseSlice(undefined, {});
    expect(nextState).toStrictEqual({ history: [], race: [] });
  });
  it('setRace', () => {
    const nextState = horseSlice(initialState, setRace([1, 2, 3]));
    expect(nextState.race).toStrictEqual([1, 2, 3]);
  });
  it('setHistory', () => {
    const nextState = horseSlice(initialState, setHistory(1));
    expect(nextState.history).toStrictEqual([1]);
  });
})


 */