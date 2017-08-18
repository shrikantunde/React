import {combineReducers} from 'redux';
import robots from './robotReducers';
import shipping from './shippingReducers';

import customer from './customerReducer';


const rootReducer = combineReducers({
  robots,shipping,customer
});

export default rootReducer;
