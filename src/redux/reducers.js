import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

const LS_KEY = 'contacts';
const storedContacts = JSON.parse(localStorage.getItem(LS_KEY));

const itemsReducer = createReducer(storedContacts, {
    [addContact]: (state, { payload }) => [payload, ...state],
    [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [filterContacts]: (_, action) => action.payload,
});

export const rootReducer = {
    contacts: combineReducers({
        items: itemsReducer,
        filter: filterReducer,
    }),
};
