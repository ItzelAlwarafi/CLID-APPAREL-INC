const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Customer = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    favoritedItems: [{type: Schema.Types.ObjectId, ref: 'clothes_id'}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", Customer);
