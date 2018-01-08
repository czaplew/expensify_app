import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '123abc'});
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc',{});
  expect(action).toEqual({type: 'EDIT_EXPENSE', id: '123abc',updates:{}});
});

test('should setup addexpense action object', () => {
  const action = addExpense({});
  expect(action).toEqual({
 type: 'ADD_EXPENSE',
  expense:{
      description : '',
      note : '',
      amount : 0,
      createdAt : 0,
      id:expect.any(String)
      }});
});
