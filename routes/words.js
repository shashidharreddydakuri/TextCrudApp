const Word = require('../models/word')
const express = require('express')
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const word = await new Word(req.body).save()
        res.send(word)
    } catch (error) {
        res.send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const words = await Word.find();
        res.send(words)
    } catch (error) {
        res.send(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const word = await Word.findOneAndUpdate(
            {_id:req.params.id}, req.body
        )
    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const word = await Word.findByIdAndDelete(req.params.id);
        res.send(word);
    } catch (error) {
        res.send(error)
        
    }
})

module.exports = router