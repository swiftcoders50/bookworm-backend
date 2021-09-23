const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
}

const userSchema = mongoose.Schema({
    userEmail: reqString,
    userName : reqString,
});

const orderDataSchema = mongoose.Schema({
    _id : reqString,
    bookName : reqString,
    authorName : reqString,
    bookImg : reqString,
    bookCategory : reqString,
    bookPrice : {
        type : Number,
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
    }

})

const paymentDataSchema = mongoose.Schema({
    paymentMethod : reqString,
    totalPrice : {
        type : Number,
        required : true,
    },
    cardNumber : String
});

const shippingDataSchema = mongoose.Schema({
    name : reqString,
    email : reqString,
    phone : reqString,
    address : reqString,
    payment : reqString,
})

const ordersSchema = mongoose.Schema({
    userData : userSchema,
    orderData: [orderDataSchema],
    paymentData : paymentDataSchema,
    shippingData : shippingDataSchema,
    status: {
        type: String,
        required: true,
    }

});
module.exports = ordersSchema;