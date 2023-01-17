import React, { useState } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';



const UpdatePhoto = ({imgSrc, updateUserImage}) => { 
  
  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className="relative pb-4 pl-11 md:pl-20 lg:pl-11">
      <div className=" mt-4 ">
        <div className={`w-[4.7rem] h-[4.7rem]`}>
          <img
            src={
              selectedImage === null
                ? `${imgSrc}`
                : URL.createObjectURL(selectedImage)
            }
            alt="user profile pic"
            className="w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
      </div>
      <div className="absolute cursor-pointer bottom-[2px] left-[4.13rem] md:-bottom-0 md:left-[6.3rem] lg:bottom-[1px] lg:left-[4rem] p-1">
        <div 
        style={{backgroundColor: "rgb(211,211,211)"}}
        className="relative cursor-pointer flex flex-col items-center rounded-full">
          <AddAPhotoIcon 
          style={{fontSize: '23px'}}
          className="cursor-pointer p-[4px] text-hover-primary" />
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

export default UpdatePhoto;
