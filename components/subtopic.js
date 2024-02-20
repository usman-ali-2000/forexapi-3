const mongoose = require("mongoose");

const subtopicSchema = new mongoose.Schema({
    tid:{
        type:String,
    },
    heading:{
        type:String,
    },
    description:{
        type:String,
    }
  });

const uploadSubTopic = new mongoose.model('uploadSubTopic', subtopicSchema);
module.exports= uploadSubTopic;