import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBookToServer } from '../redux/books/booksSlice';

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author } = formData;
    if (title && author) {
      dispatch(addBookToServer({
        item_id: nanoid(), title, author, category: 'fiction',
      }));
      setFormData({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form action="" className=" border-t mt-8 py-3 md:w-[90%] mx-auto">
      <h2 className=" font-bold text-gray-500 py-3">ADD NEW BOOK</h2>
      <fieldset className="grid md:grid-cols-[3fr,1fr,.7fr] gap-2">
        <input type="text" name="title" placeholder="Book title" className=" border rounded-md px-4 py-2" value={formData.title} onChange={handleInputChange} />
        <input type="text" name="author" placeholder="author" className=" border rounded-md px-4 py-2" value={formData.author} onChange={handleInputChange} />
        <button type="submit" className=" font-robotoSlob bg-[rgb(2,144,255)] p-2 md:px-6 text-white rounded-md mt-4 md:mt-0" onClick={handleSubmit}>ADD BOOK</button>
      </fieldset>
    </form>
  );
};

export default Form;
