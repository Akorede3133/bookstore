import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromServer } from '../redux/books/booksSlice';

const SingleBook = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <li className="flex p-5 md:pr-20 gap-4 md:gap-0 flex-col md:flex-row justify-between md:items-center shadow bg-white md:p-10 border border-slate-200 rounded-md">
      <article>
        <p className=" text-slate-600 text-sm font-bold capitalize ">{category}</p>
        <h2 className=" font-bold text-3xl">{title}</h2>
        <p className=" text-sm text-[rgb(67,134,191)]">{author}</p>
        <ul className=" flex gap-2 mt-4 text-[rgb(67,134,191)]">
          <li className="pr-3">
            <button type="button">Comments</button>
          </li>
          <li className=" border-l px-3">
            <button type="button" onClick={() => dispatch(deleteBookFromServer({ item_id: id }))}>Remove</button>
          </li>
          <li className=" border-l px-3">
            <button type="button">Edit</button>
          </li>
        </ul>
      </article>
      <article className="flex justify-between items-center gap-10">
        <div className="flex flex-col md:flex-row md:items-center gap-1">
          <div className="progress" />
          <div>
            <p className=" font-medium text-2xl">64%</p>
            <span>completed</span>
          </div>
        </div>
        <div className=" w-[60px] h-[2px] bg-gray-200 rotate-90" />
        <div>
          <h3 className=" text-gray-400">CURRENT CHAPTER</h3>
          <p>Chapter 17</p>
          <button type="button" className="bg-[rgb(2,144,255)] px-2 py-1 mt-4 text-white rounded">UPDATE PROGRESS</button>
        </div>
      </article>
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
