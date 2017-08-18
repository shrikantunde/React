import * as types from '../actions/actionTypes';

export default function Robotreducer(state = [], action) {
  console.log('>>>>>>>reducer',state)
  switch(action.type) {
    case  types.LOAD_ROBOT:
       return action.robot
    default:
      return state;
  }
}
