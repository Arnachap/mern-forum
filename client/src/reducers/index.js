import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import forum from './forum';

export default combineReducers({
  auth,
  alert,
  forum
});
