import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

//------------------- GET USER INFORMATION -------------
export const getUser = catchAsync(async (req, res) => {
  res.status(200).json(req.user);
});

//------------------- UPDATE USER INFORMATION -------------

export const updateMe = catchAsync(async (req, res, next) => {
  
  //1) Create error if user POSTs password data
    if (req.body.password || req.body.passwordConfirm) {
      return next(
        new AppError(
          "This route is not for password updates. Please use /updateMyPassword.",
          400
        )
      );
    }
    let fieldToUpdate = {
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo,
        course: req.body.course,
    };

  for (const [key, value] of Object.entries(fieldToUpdate)) {
    if (!value) {delete fieldToUpdate[key]}}

  //2) Update user document
  const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        { $set: { ...fieldToUpdate } },
        {
          runValidators: true,
          new: true,
        }
  );

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

//------------------- DELETE USER INFORMATION -------------

export const deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

//------------------- ADD USER ROOM -------------
