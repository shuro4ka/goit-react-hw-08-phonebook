import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    {
      name: 'Mark',
      number: '9383898989',
      id: 787878,
    },
  ],
};

console.log(contactsInitialState);
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number, id }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const selectContacts = state => state.contacts.contacts;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
