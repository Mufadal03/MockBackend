const { Router } = require("express")
const { QuizModel } = require("../model/Quiz.model")

questionController = Router()

questionController.post("/create", async(req, res) => {
    const Question = await QuizModel({ ...req.body })
    Question.save()
    // res.send(`Question Created ${Question}`)
    res.status(200).send({'response':"Quiz Created"})
})


questionController.get("/", async (req, res) => {
    const { category, limit, difficulty } = req.query 
    const data = await QuizModel.find({ category, difficulty })
    res.send(data)
})

module.exports={questionController}