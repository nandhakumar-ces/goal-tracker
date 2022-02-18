import User from "../models/user-model.js";
import { signedToken } from "../routes/utils.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      const { _id } = user;
      const token = signedToken(_id);
      return res.json({
        Status: true,
        Data: user,
        token,
      });
    } else {
      res.json({ Status: false, Message: "Invalid" });
    }
  } catch (error) {
    res.json({ Status: false, Message: error.message });
  }
};

export const signup = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    User.findOne({
      eMail: user.eMail,
    }).exec(function (err, docs) {
      if (err) console.log(err);
      else {
        if (docs === null) {
          newUser.save();
          return res.json({
            Status: true,
          });
        } else
          return res.json({
            Status: false,
          });
      }
    });
  } catch (error) {
    res.json({ Status: false, Message: error.message });
  }
};
