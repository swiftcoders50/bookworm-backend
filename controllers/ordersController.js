const mongoose = require('mongoose');
const ordersSchema = require('../models/Orders')
const Order = new mongoose.model("order",ordersSchema)

async function orders(req, res) {
    res.send("Orders....");
  }

  async function addOrders(req, res) {
    const newOrder = new Order(req.body);
    await newOrder.save((err) => {
      if (err) {
        res.status(500).json({
          error: err.message
        })
      }
      else {
        res.status(200).json({
          message: "success"
        })
      }
    })
  }
  
  module.exports = {
    orders,
    addOrders,
  };
  