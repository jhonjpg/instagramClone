const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({

    email: {

        type: String,
        lowercase: true,
        required: true,
        unique: true

    },

    name: {

        type: String,
        lowercase: true,
        required: true


    },
    userName: {

        type: String,
        required: true,
    },

    password: {

        type: String,
        required: true,
    },



    tokenConfirm: {

        type: String,
        default: null,


    },
    confirm: {

        type: Boolean,
        default: false,


    },

    photo: {

        type: String,
        default: null

    },


})

// UserSchema.pre('save', async function (next) {

//     const user = this;

//     if(!user.isModified('UserPassword')) return next()

//     try {
//         const salt = await bcrypt.genSalt(10)
//         const hash = await bcrypt.hash(user.UserPassword, salt)

//         user.UserPassword = hash

//         next()
//     } catch (error) {
//         console.log(error)
//         next()
//     }
// })



const User = mongoose.model('Users', UserSchema);

module.exports = User