import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer: (state, action) => {
        state.books.push(action.payload);
      },
      prepare: (name, author) => ({
        payload: {
          name,
          author,
        },
      }),
    },
    removeBook: (state, action) => {
      const { id } = action.payload;
      state.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
