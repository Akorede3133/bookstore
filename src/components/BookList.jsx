import { useSelector } from 'react-redux';
import { selectAllBooks } from '../redux/books/booksSlice';
import SingleBook from './SingleBook';

const BookList = () => {
  const books = useSelector(selectAllBooks);
  return (
    <div>
      <ul>
        {
          books.books.map((book) => {
            const { item_id: id, title, author } = book;
            return <SingleBook key={id} title={title} author={author} />;
          })
        }
      </ul>
    </div>
  );
};

export default BookList;
