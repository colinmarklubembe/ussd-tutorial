import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  id_number: {
    type: String,
    required: true,
  },
});
const User = model("User", userSchema);
export default User;
