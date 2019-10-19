import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import section from './section';
import forum from './forum';

export default combineReducers({
  auth,
  alert,
  section,
  forum
});
