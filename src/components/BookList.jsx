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
