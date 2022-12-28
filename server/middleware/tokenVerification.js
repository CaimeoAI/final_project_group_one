import jwt from "jsonwebtoken";

export const tokenVerification = (req, res, next) => {
  //console.log(req.headers.authorization);
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access denied" });
    const payLoad = jwt.verify(token, process.env.JWT_SECRET);

    if (payLoad) {
      //sending user ID in payload
      req.id = payLoad.id;
      next();
    } else {
      res.status(401).json({ message: "Access denied" });
    }
  } catch (error) {
    next(error);
  }
};
