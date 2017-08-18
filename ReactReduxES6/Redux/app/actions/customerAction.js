import * as types from './actionTypes';
import axios from 'axios';
const apiUrl = 'http://localhost:3000/customer';
const apiUrl1 = 'http://localhost:3000/customer';
const apiURL2 ='https://www.msamb.com/ApmcDetail/DataGridBind?commodityCode=08039&apmcCode=null';

export function customerAction(customer) {
    console.log("Customer action");
    console.log(customer);
  return {type: types.BUTTON_CLICK, customer};
};

export function commodityAction(commodity) {
    console.log("Commodity action");
    console.log(commodity);
  return {type: types.GET_COMMODITY, commodity};
};

export function customerFormSubmitAction(customer) {
    console.log("customerFormSubmitAction");
    alert("customerFormSubmitAction");
    console.log(customer);
  return {type: types.FORM_SUBMIT, customer};
};

export const loadCustomer = () => {
    alert('load cutomer')
  return (dispatch) => {
    return axios.get(apiUrl,)
      .then(response => {
          console.log('customer action data');
          console.log(response.data);
        dispatch(customerAction(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getCommodity = () => {
    alert('load commodity data')
  return (dispatch) => {
    return axios.get(apiURL2,)
      .then(response => {
          console.log('get commodity data');
          console.log(response.data);
        dispatch(commodityAction(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const postCustomer = (customer) => {
  console.log('Post customer',customer)
  return (dispatch) => {
    return axios.post(apiUrl1,customer)
      .then(response => {
        // dispatch(robotActions(response.data))
        console.log("Post customer response");
        console.log(response);
        return response;
      })
      .catch(error => {
        throw(error);
      });
  };
};