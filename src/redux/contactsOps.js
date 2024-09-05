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