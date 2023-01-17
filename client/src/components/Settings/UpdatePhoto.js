import React, { useState } from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';



const UpdatePhoto = () => { 
  const [selectedImage, setSelectedImage] = useState(null);
  const image = localStorage.getItem("photo")
 

  return (
    <div className="relative pb-4 pl-11 md:pl-20 lg:pl-11">
      <div className=" mt-4 ">
        <div className={`w-16 h-16`}>
          <img
            src={
              selectedImage === null
                ? `${image}`
                : URL.createObjectURL(selectedImage)
            }
            alt="user profile pic"
            className="w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
      </div>
      <div className="absolute cursor-pointer bottom-1 left-[4rem] md:bottom-1 md:left-[6.2rem] lg:bottom-2 lg:left-[4rem]">
        <div 
        style={{backgroundColor: "rgb(211,211,211,0.9)"}}
        className="relative cursor-pointer flex flex-col items-center rounded-full">
          <CameraAltIcon className="w-10 h-8  cursor-pointer p-[4px] text-accent-secondary" />
          <input
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            //   updateUserImage(event);
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

export default UpdatePhoto;
