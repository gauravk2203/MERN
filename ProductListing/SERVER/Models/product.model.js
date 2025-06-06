import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

export const Product = mongoose.model('Product', productSchema);
