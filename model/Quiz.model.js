const mongoose = require("mongoose")

const QuizSchema = mongoose.Schema({
    question:{type:String,required:true},
    category: { type: String, required: true },
    difficulty: { type: String, required: true },
    options: { type: [String], required: true },
    correct_answer: { type: String, required: true }
})

const QuizModel = mongoose.model("question", QuizSchema)

module.exports={QuizModel}