import moment from 'moment';
import {setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters';


test('should set start date', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate:moment(0)
  });
});

test('should set start date', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text:''
  });
});


test('should set text filter',()=>{
  const text = "text";
  const action = setTextFilter("text");
  expect(action).toEqual({type:'SET_TEXT_FILTER',
  text})
});



// SET_END_DATE
// export const setEndDate = (endDate) => ({
//   type: 'SET_END_DATE',
//   endDate
// });
