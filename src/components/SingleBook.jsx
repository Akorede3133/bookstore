import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const SingleBook = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <li className=" flex justify-between">
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <ul className=" flex gap-1">
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          </li>
          <li>
            <button type="button">Edit</button>
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
};

export default SingleBook;

SingleBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
