const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({

    postImage: {

        type: String,
        required: true,

    },



})


module.exports = mongoose.model('posted', postSchema);