import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (term: string) => {
    setImages(await searchImage(term));
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
