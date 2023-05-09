import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  
  address: {
    type: String,
    required: [true, "Please enter address"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  policy: {
    type: Number,
    required: [true, "Please enter policy number"],
  },
  membership: {
    type: Number,
    required: [true, "Please enter membership number"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter phone number"],
  },
  age: {
    type: Number,
    required: [true, "Please enter phone number"],
  },

  hospitalName: {
    type: String,
  },
  hospitalAdress: {
    type: String,
  },
  physicianName: {
    type: String,
  },

 

  // category: {
  //   type: String,
  //   required: [true, "Please enter product category"],
  //   enum: {
  //     values: [
  //       "Electronics",
  //       "Cameras",
  //       "Laptops",
  //       "Accessories",
  //       "Headphones",
  //       "Sports",
  //     ],
  //     message: "Please select a category",
  //   },
  // },

 
  claims: [
    {
        type: String,
      },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
