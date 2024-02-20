const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
    subid:{
        type:String,
    },
    image:{
        type:String,
    },
    text:{
        type:String,
    },
    tid:{
        type:String,
    },
  });

const uploadDetail = new mongoose.model('uploadDetail', detailSchema);
module.exports = uploadDetail;