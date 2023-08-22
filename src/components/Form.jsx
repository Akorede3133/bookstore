import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

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
      dispatch(addBook(title, author));
      setFormData({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form action="">
      <h2>ADD NEW BOOK</h2>
      <fieldset>
        <input type="text" name="title" placeholder="Book title" className=" border" value={formData.title} onChange={handleInputChange} />
        <input type="text" name="author" placeholder="author" className=" border" value={formData.author} onChange={handleInputChange} />
        <button type="submit" className=" bg-blue-500 p-2 text-white" onClick={handleSubmit}>ADD BOOK</button>
      </fieldset>
    </form>
  );
};

export default Form;
