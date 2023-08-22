import PropTypes from 'prop-types';

const SingleBook = ({ title, author, id }) => (
  <li className=" flex justify-between">
    <div>
      <p>Action</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <ul className=" flex gap-1">
        <li>
          <button id={id} type="button">Comments</button>
        </li>
        <li>
          <button id={id} type="button">Remove</button>
        </li>
        <li>
          <button id={id} type="button">Edit</button>
        </li>
      </ul>
    </div>
    <div className="flex gap-10">
      <div className="flex gap-2">
        <div className="progress" />
        <div>
          <p>64%</p>
          <span>completed</span>
        </div>
      </div>
      <div>
        <h3>CURRENT CHAPTER</h3>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </li>
);

export default SingleBook;

SingleBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
