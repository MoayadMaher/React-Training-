import "./index.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { Book } from "./interfaces";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const editBookById = (id: number, newTitle: string) => {
    const updateBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updateBook);
  };

  const deleteBookById = (id: number) => {
    const updateBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBook);
  };

  const createBook = (title: string) => {
    const updatedBooks: Book[] = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
