import BookShow from "./BookShow";
import { Book } from "../interfaces";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books }: any = useBooksContext();

  const renderedBooks = books.map((book: Book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
