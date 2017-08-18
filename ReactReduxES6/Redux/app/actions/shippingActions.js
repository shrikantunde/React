import * as types from './actionTypes';
import axios from 'axios';
const apiUrl = 'http://localhost:3000/robots';
const apiUrl1 = 'http://localhost:3000/extiguish';
const apiUrl2 = 'http://localhost:3000/recycleRobots';
const apiUrl3 = 'http://localhost:3000/shipping';

export function shippingActions(shipping) {
  console.log("Shipping Actions");
  console.log(shipping);

  return {type: types.LOAD_SHIPPING_DATA, shipping};
};

export const loadShipping = () => {
  return (dispatch) => {
    return axios.get(apiUrl3,)
      .then(response => {
        console.log("shipping data");
        console.log(response.data);
        dispatch(shippingActions(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getRobot = () => {
  return (dispatch) => {
    return axios.get(apiUrl1)
      .then(response => {
        console.log('response',response.data)
         return response.data;
        // dispatch(robotActions(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
export const postrobot = (id) => {
  console.log('postrobot',id)
  return (dispatch) => {
    return axios.post(apiUrl1,id)
      .then(response => {
        // dispatch(robotActions(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

