import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllBooks, getBookFromServer } from '../redux/books/booksSlice';
import SingleBook from './SingleBook';
import Loading from './Loading';
import Error from './Error';

const BookList = () => {
  const dispatch = useDispatch();

  const { books, error, loading } = useSelector(selectAllBooks);

  useEffect(() => {
    dispatch(getBookFromServer());
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }
  if (!Array.isArray(books) || error) {
    return <Error />;
  }
  return (
    <div className="md:w-[90%] mx-auto font-robotoSlob">
      <ul className="flex flex-col gap-4">
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
