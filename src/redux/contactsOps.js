import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("https://66d7e52137b1cadd805296db.mockapi.io/api/v1/Contacts");
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (profile, thunkAPI) => {
    try {
      const { data } = await axios.post(`https://66d7e52137b1cadd805296db.mockapi.io/api/v1/Contacts`, profile);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (profileId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`https://66d7e52137b1cadd805296db.mockapi.io/api/v1/Contacts/${profileId}`);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)