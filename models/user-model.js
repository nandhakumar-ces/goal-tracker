import mongoose from "mongoose";

const USERSCHEMA = mongoose.Schema({
  name: String,
  eMail: String,
  password: {
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("user", USERSCHEMA);

export default User;
