import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import EmployeeReducer from './employees/employeeReducer';

let store = createStore(EmployeeReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
