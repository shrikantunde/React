import * as types from '../actions/actionTypes';

export default function Shippingreducer(state = [], action) {
  console.log('>>>>>>>shipping reducers',state)
  switch(action.type) {
    case  types.LOAD_SHIPPING_DATA:
       return action.shipping
    default:
      return state;
  }
}
