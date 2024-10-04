const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true
    },
    blog: {
        type: mongoose.Types.ObjectId,
        ref: "blog",
    },
    is_active: {
        type: Boolean,
        default: true,
    },
},
    {
        timestamps: true,
        versionKey: false,
    }
);
const user = mongoose.model("user", userSchema);
module.exports = user;