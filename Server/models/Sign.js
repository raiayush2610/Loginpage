const mongoose = require('mongoose');
var Buffer = require('buffer/').Buffer
const usernameSchema = new mongoose.Schema({
        Name:{type: String},
        Age:{ type : Number}, 
        Birth:{ type : Date},
        Profileimg:{
                        contentType: "String",
                        data: Buffer
                       
                },        
        Email:{ type : String},
        Password:{ type : String}

})
 
module.exports = mongoose.model('UserItem',usernameSchema);