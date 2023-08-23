import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  loading: false,
  error: '',
};
const appId = 'xEU2P3EW7ZDOC4O4U6Sh';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;
export const addBookToServer = createAsyncThunk('books/addToServer', async (obj) => {
  try {
    const response = await axios.post(`${url}/books`, obj);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
});
export const getBookFromServer = createAsyncThunk('books/getFromServer', async () => {
  try {
    const response = await axios.get(`${url}/books`);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
});
export const deleteBookFromServer = createAsyncThunk('books/deleteFromServer', async (obj) => {
  const { item_id: id } = obj;
  try {
    const response = await axios.delete(`${url}/books/${id}`, {
      data: obj,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
});
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBookFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.books = Object.entries(action.payload).map((book) => {
        const [id] = book;
        book[1][0].item_id = id;
        return book[1][0];
      });
    });
    builder.addCase(getBookFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default booksSlice.reducer;

export const selectAllBooks = (state) => state.books;
