const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    image:{
        type:String,
    },
    heading:{
        type:String,
    },
    description:{
        type:String,
    }
  });

const uploadTopic = new mongoose.model('uploadTopic', topicSchema);
module.exports = uploadTopic;