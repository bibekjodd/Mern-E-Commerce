const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
    },

    description: {
        type: String,
        required: [true, "Please enter product description"]
    },

    price: {
        type: Number,
        required: [true, "Please enter product price"],
        maxLength: [8, "Price cannot exceed 8 figures"]
    },

    rating: {
        type: Number,
        default: 0,
    },

    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],

    category: {
        type: String,
        required: [true, "Please enter product category"]
    },

    stock: {
        type: Number,
        // required: [true, "Please enter product stock"],
        maxLength: [4, 'Stock cannot enter 4 characters']
    },

    numOfReviews: {
        type: Number,
        default: 0,
    },

    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Product = mongoose.model('Product', productSchema);
module.exports = Product