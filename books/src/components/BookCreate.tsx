import { useState, ChangeEvent, FormEvent } from "react";

interface BookCreateProps {
  onCreate: (title: string) => void;
}

function BookCreate({ onCreate }: BookCreateProps) {
  const [title, setTitle] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book </h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
export default BookCreate;
