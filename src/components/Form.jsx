import React from 'react';

const Form = () => (
  <form action="">
    <h2>ADD NEW BOOK</h2>
    <fieldset>
      <input type="text" placeholder="Book title" className=" border" />
      <input type="text" placeholder="author" className=" border" />
      <button type="submit" className=" bg-blue-500 p-2 text-white">ADD BOOK</button>
    </fieldset>
  </form>
);

export default Form;
