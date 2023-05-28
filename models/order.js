const { Schema, model, SchemaTypes } = require("mongoose");

const orderSchema = new Schema(
  {
    userId: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    shopId: {
      type: SchemaTypes.ObjectId,
      ref: "Shop",
      required: true,
    },
    items: [
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
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);

module.exports = Order;
