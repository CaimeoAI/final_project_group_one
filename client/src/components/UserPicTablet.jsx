import React from "react";

const UserPicTablet = () => {
  return (
    <div className="hidden w-10 h-10 rounded-full md:flex mt-4 ml-3 lg:hidden">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        alt="user profile pic"
        className="w-[100%] object-cover rounded-full"
      />
    </div>
  );
};

export default UserPicTablet;
