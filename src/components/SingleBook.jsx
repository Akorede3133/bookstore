import React from 'react'

const SingleBook = () => {
  return (
    <div className=' flex justify-between'>
      <div>
        <p>Action</p>
        <h2>The Hunger Games</h2>
        <p>Suzanne Collins</p>
        <ul className=' flex gap-1'>
          <li>
            <button>Comments</button>
          </li>
          <li>
            <button>Remove</button>
          </li>
          <li>
            <button>Edit</button>
          </li>
        </ul>
      </div>
      <div className='flex gap-10'>
      <div className='flex gap-2'>
        <div className='progress'></div>
        <div>
          <p>64%</p>
          <span>completed</span>
        </div>
      </div>
      <div>
        <h3>CURRENT CHAPTER</h3>
        <p>Chapter 17</p>
        <button>UPDATE PROGRESS</button>
      </div>
      </div>
    </div>
  )
}

export default SingleBook