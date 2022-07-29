import { combineReducers } from '@reduxjs/toolkit';

const itemsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'contacts/addContact':
            return [payload, ...state];

        case 'contacts/deleteContact':
            return state.filter(({ id }) => id !== payload);
        default:
            return state;
    }
};

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case 'contacts/filter':
            return payload;
        default:
            return state;
    }
};

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

export const rootReducer = combineReducers({
    contacts: contactsReducer,
});
