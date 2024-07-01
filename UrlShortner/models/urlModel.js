const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    nanoId :{
        type:String,
        unique : true,
        required : true,
    },
    redirectUrl: {
        type: String,
        required : true,
    },
    visitHistory :[
        {
            timeStamp : {
                type : Number
            }
        }
    ]
},
{timestamp : true}
);

const URL = mongoose.model("urls", urlSchema)

module.exports = URL;