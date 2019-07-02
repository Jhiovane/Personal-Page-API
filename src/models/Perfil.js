const mongoose = require("mongoose");
const PerfilSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
      type: String,
      required: true,
      default: "https://cdn.icon-icons.com/icons2/621/PNG/512/user-black-close-up-shape_icon-icons.com_56876.png"
  },
  infos:[
    {
      title: {
        type: String,
        required: true
      },
      class: {
        type: String,
        required: false,
        default: "icon interesting"
        },
        descriptions: {
          type: [],
          required: false
        }
    }    
  ], 
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Perfil", PerfilSchema);


