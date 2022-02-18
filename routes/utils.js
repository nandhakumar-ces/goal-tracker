import jwt from "jsonwebtoken";
import User from "../models/user-model.js";

export const signedToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRED_IN,
  });

export const auth = async (req, res, next) => {
  const token = req.header("Auth-Token");
  if (!token) {
    return res.json({
      StatusCode: 401,
      Status: false,
      Message: "No token, authorization denied",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.json({
        StatusCode: 401,
        Status: false,
        Message: "Token is not valid",
      });
    }
    req.user = currentUser;
    return next();
  } catch (err) {
    return res.json({
      StatusCode: 401,
      Status: false,
      Message: "TokenExpiredError: jwt expired",
    });
  }
};
