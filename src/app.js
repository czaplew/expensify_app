import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore  from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({
  description : 'water bill',
  note : 'For a water',
  amount : 100,
  createdAt : 10
}));

store.dispatch(addExpense({
  description : 'gas bill',
  note : 'For a gas',
  amount : 123,
  createdAt : 11
}));

store.dispatch(setTextFilter('water'));

setTimeout(()=>{
  store.dispatch(setTextFilter('rent'))
},1000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

const jsx = (<Provider store={store}>
  <AppRouter/>
</Provider>);

console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('app'));
