import { useState } from "react";

function BookEdit({ book, onSubmit }: any) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="input">
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}
export default BookEdit;
