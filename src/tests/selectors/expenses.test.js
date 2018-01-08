import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0).subtract(4,'days').valueOf()
  }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).add(4,'days').valueOf()
  },
  {
    id: '3',
    description: 'Gun',
    note: '',
    amount: 1999,
    createdAt: 0
  }
];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1]]);
});

test('should filter by startDate',()=>{
  const filters = {
    text:'',
    sortBy:'date',
    startDate:moment(0),
    endDate:undefined
  }
  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[1],expenses[2]]);
});
