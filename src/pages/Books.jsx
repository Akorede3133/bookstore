import React from 'react';
import Form from '../components/Form';
import BookList from '../components/BookList';

const Books = () => (
  <div className=" w-[80%] mx-auto">
    <BookList />
    <Form />
  </div>
);

export default Books;
