import React from 'react'
import Form from './Form'
import BookList from './BookList'
const Books = () => {
  return (
    <div className=' w-[80%] mx-auto'>
      <BookList />
      <Form />
    </div>
  )
}

export default Books