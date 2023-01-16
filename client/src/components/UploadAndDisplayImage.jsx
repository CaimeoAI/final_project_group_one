import React, { useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";

const UploadAndDisplayImage = ({ updateUserImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className=" relative p-3">
      <div className="flex justify-center">
        <div className={`w-16 h-16`}>
          <img
            src={
              selectedImage === null
                ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                : URL.createObjectURL(selectedImage)
            }
            alt="user profile pic"
            className="w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
      </div>
      <div className="absolute cursor-pointer bottom-[4px]  -right-[1px]">
        <div className="relative cursor-pointer flex flex-col items-center">
          <MdAddPhotoAlternate className="w-10 h-8  cursor-pointer p-1 fill-accent-secondary" />
          <input
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
              updateUserImage(event);
            }}
            name="photo"
            type="file"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
