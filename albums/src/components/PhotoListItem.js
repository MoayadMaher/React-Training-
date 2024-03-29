import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotoListItem({ photo }) {
  const [removePhoto, result] = useRemovePhotoMutation();
  const handleRmovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div onClick={handleRmovePhoto} className="relative cursor-pointer m-2">
      <img className="h-20 w-20" src={photo.url} alt="rondom" />
      <p>{photo.title}</p>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
        <GoTrashcan className="text-3xl text-white" />
      </div>
    </div>
  );
}

export default PhotoListItem;
