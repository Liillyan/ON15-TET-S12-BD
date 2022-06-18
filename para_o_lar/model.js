const mongoose = require("mongoose")

const FilmeSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    }
)}