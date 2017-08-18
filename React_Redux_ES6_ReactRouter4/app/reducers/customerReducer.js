import * as types from '../actions/actionTypes';

export default function Customerreducer(state = ['shriaknt'], action) {
  console.log('>>>>>>>customer reducers',state)
  switch(action.type) {
    case  types.BUTTON_CLICK:
       return action.customer
    case types.FORM_SUBMIT:
        return action.customer
    case types.GET_COMMODITY:
        return action.commodity
    default:
      return state;
  }
}
