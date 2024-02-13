const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Customer = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: Number, required: true },
    },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    favoritedItems: [{type: Schema.Types.ObjectId, ref: 'clothes_id'}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", Customer);
