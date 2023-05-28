const { Schema, model, SchemaTypes } = require("mongoose");
// const { handleError } = require("../helpers");

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisine: {
      type: String,
    },
    deliveryTime: {
      type: String,
    },
    menu: [
      {
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        photo: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  { versionKey: false }
);

// contactSchema.post("save", handleError);

const Shop = model("shop", shopSchema);

module.exports = Shop;
