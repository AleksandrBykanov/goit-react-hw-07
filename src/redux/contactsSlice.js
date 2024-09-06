import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { contacts, nameFilter } from "./selectors";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const profileSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.items.unshift(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.items = state.contacts.items.filter(
          (profile) => profile.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
});

export const selectFilteredContacts = createSelector(
  [contacts, nameFilter],
  (profile, filterValue) => profile.filter((item) => item.name.toLowerCase().includes(filterValue.toLowerCase()))
)

export const contactsSlice = profileSlice.reducer;