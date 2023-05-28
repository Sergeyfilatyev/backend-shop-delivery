const { Schema, model } = require("mongoose");
// const { handleError } = require("../helpers");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
  },
  { versionKey: false }
);
// userSchema.post("save", handleError);

const User = model("user", userSchema);

module.exports = User;
