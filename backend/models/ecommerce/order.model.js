import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }
})
const orderSchema = new mongoose.Schema({
    orderPrize:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItems:{
        type : [orderItemSchema]
    },
    address :{
        type : String,
        require: true,
    },
    status:{
        type:String,
        enum:['PENDING', 'CANCELLED','DELIVERED'],
        default:'PENDING'
    }
},{timestamps:true})

export const Order = mongoose.model('Order',orderSchema)