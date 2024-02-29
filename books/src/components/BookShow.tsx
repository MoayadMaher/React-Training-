import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }: any) {
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditCilck = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id: number, newTitle: string) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditCilck}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
