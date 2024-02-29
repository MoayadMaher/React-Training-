import BookShow from "./BookShow";
import { Book } from "../interfaces";

function BookList({ books, onDelete, onEdit }: any) {
  const renderedBooks = books.map((book: Book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
