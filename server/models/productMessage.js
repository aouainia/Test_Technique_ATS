import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productName: String ,
    description:  String,
    price: Number,
    imageUrl: String,
    reviews: [{
        value: Number,
        content: String
    }]
});

const ProductMessage = mongoose.model('ProductMessage', productSchema);
export default ProductMessage;