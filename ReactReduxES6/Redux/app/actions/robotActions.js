import * as types from './actionTypes';
import axios from 'axios';
const apiUrl = 'http://localhost:3000/robots';
const apiUrl1 = 'http://localhost:3000/extiguish';
const apiUrl2 = 'http://localhost:3000/recycleRobots';


export function shippingActions(robot) {
  return {type: types.LOAD_ROBOT, robot};
};

export const loadRobot = () => {
  return (dispatch) => {
    return axios.get(apiUrl,)
      .then(response => {
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

export const postrecycle = (id) => {
  console.log('postrecycle',id)
  return (dispatch) => {
    return axios.post(apiUrl2,id)
      .then(response => {
        // dispatch(robotActions(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
