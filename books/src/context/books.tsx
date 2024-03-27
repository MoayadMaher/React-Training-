import { Book } from "../interfaces";
import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }: any) {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const editBookById = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updateBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBook);
  };

  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updateBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBook);
  };

  const createBook = async (title: string) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks: Book[] = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShere = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook,
  };

  return (
    <BooksContext.Provider value={valueToShere}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
