import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  contacts: {
		items: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
	},
}

const profileSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.unshift(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter((profile) => profile.id !== action.payload)
    }
  }
})

export const contactsSlice = profileSlice.reducer;
export const {addContact, deleteContact} = profileSlice.actions

