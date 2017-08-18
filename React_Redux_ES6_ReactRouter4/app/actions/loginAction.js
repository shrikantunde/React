import * as types from './actionTypes';
import axios from 'axios';
const apiUrl = 'http://localhost:3000/customer';
const apiUrl1 = 'http://localhost:3000/customer';

export function loginAction(user) {
    console.log("Login action");
    console.log(user);
  return {type: types.BUTTON_CLICK, user};
};

export function loginFormSubmitAction(user) {
    console.log("customerFormSubmitAction");
    alert("customerFormSubmitAction");
    console.log(user);
  return {type: types.FORM_SUBMIT, user};
};

export const loadUser = () => {
    alert('load cutomer')
  return (dispatch) => {
    return axios.get(apiUrl,)
      .then(response => {
          console.log('user action data');
          console.log(response.data);
        dispatch(loginAction(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const postLogin = (user) => {
  console.log('Post User login Id',user.id);
  console.log('Post User  name',user.password);
  return (dispatch) => {
    return axios.post(apiUrl1,user)
  };
};