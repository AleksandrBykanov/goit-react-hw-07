import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts } from "./contactsOps";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null
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
  },
  extraReducers: (builder) => builder.addCase(fetchContacts.pending, (state) => {
    state.loading = true;
    state.error = null;
  }).addCase(fetchContacts.fulfilled, (state, action) => {
    state.loading = false;
    state.contacts.items = action.payload;
  }).addCase(fetchContacts.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  }),

})

export const contactsSlice = profileSlice.reducer;
export const {addContact, deleteContact} = profileSlice.actions

