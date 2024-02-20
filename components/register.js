const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    email:{
      type: String,
    },
    phone:{
        type: String,
    },
    password:{
        type: String,
    }
  });

const uploadRegister = new mongoose.model('uploadRegister', registerSchema);
module.exports = uploadRegister;