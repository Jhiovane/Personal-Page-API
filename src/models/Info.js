const mongoose = require("mongoose");
const InfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  class_icon:{
    type: String,
    required: false,
    default: "icon normal"

  },
  itens:[
    {
      title: {
        type: String,
        required: true
      },
      description: {
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
module.exports = mongoose.model("Info", InfoSchema);