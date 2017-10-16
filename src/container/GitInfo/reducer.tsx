import * as iassign from 'immutable-assign';
import { combineReducers } from 'redux';
import { STATE_PROP } from '../Async';
import { REFRESH } from '../GitInfo';
import { RegisterToRootReducer } from '../../RootReducer';

const refreshCount = (refreshCount = {count: 0}, action) => {
  switch (action.type) {
    case REFRESH:
      return iassign(refreshCount, (obj) => {
        obj.count++;
        return obj;
      });
    default:
      return iassign(refreshCount, (obj) => {
        obj.count = 0;
        return obj;
      });
  }
};

const GetInfoReducer = combineReducers({
    refreshCount,
});

RegisterToRootReducer(STATE_PROP, GetInfoReducer);
