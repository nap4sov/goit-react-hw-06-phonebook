import { createStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
// const LS_KEY = 'contacts';

const store = createStore(
    rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;