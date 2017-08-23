import { Schema, model } from 'mongoose';

// module.exports = mongoose.model('', post)

let userSchema: Schema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    name: {
        type: String,
        default: '',
        required: true
    },
    username: {
        type: String,
        default: '',
        required: true
    },
    email: {
        type: String,
        default: '',
        required: true,
        unique: true
    },
    password:{
        type: String,
        default: '',
        required: true
    }
})

export default model('User', userSchema);
