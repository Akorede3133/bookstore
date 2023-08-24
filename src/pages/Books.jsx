import React from 'react';
import Form from '../components/Form';
import BookList from '../components/BookList';

const Books = () => (
  <div className="min-h-screen w-full mx-auto bg-[whitesmoke] py-10 p-4">
    <BookList />
    <Form />
  </div>
);

export default Books;
