import "./SearchBar.css";
import { useState, FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
  const [term, setTerm] = useState("");

  const handleformSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event: any) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleformSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
