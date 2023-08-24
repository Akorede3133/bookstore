import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllBooks, getBookFromServer } from '../redux/books/booksSlice';
import SingleBook from './SingleBook';

const BookList = () => {
  const dispatch = useDispatch();

  const { books, error, loading } = useSelector(selectAllBooks);

  useEffect(() => {
    dispatch(getBookFromServer());
  }, [dispatch]);
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (!Array.isArray(books) || error) {
    return <div>An Error occur</div>;
  }
  return (
    <div>
      <ul>
        {
         books?.map((book) => {
           const {
             item_id: id, title, author, category,
           } = book;
           return (
             <SingleBook
               key={id}
               title={title}
               author={author}
               category={category}
               id={id}
             />
           );
         })
        }
      </ul>
    </div>
  );
};

export default BookList;
