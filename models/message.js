const mongoose = require('mongoose');

// Define Schemas
const messageSchema = new mongoose.Schema({
    sender: {type:String, required:true},
    roomName: {type:String, required:true},
    content: {type:Object, required:true},
    time: {type:String, required:true},
    read: {type:String, default: false}
},
{
    timestamps: true
});

// Create new message documnet
messageSchema.statics.create = function (payload) {
    // this === Model
    const message = new this(payload);
    // return Promise
    return message.save();
}

// Find All
messageSchema.statics.findAll = function () {
    // return Promise
    // V4 부터 exec 필요없음
    return this.find({})
}

// Find One by todoid
messageSchema.statics.findByRoodName = function (roomName) {
    return this.find({ roomName });
}

/*
// Update by todoid
messageSchema.statics.updateByTodoid = function (todoid, payload) {
    // {new: true} : return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ todoid }, payload, {new: true});
}
*/
/*
// Delete by todoid
messageSchema.statics.deleteByTodoid = function (todoid) {
    return this.remove({ todoid });
}
*/
// Create Model & Export
module.exports = mongoose.model('Message', messageSchema);