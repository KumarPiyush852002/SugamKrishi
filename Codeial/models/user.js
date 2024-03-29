const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');

const schema = new mongoose.Schema({
    username: {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    // avatar : {
    //     type: String,
    // }
},{
    timestamps : true
});

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname,'..',AVATAR_PATH))
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// });

const authenModel = mongoose.model('User',schema);

module.exports = authenModel;