import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }: any) {
  const renderImages = images.map((image: any) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderImages}</div>;
}

export default ImageList;
