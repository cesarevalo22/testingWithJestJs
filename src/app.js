import express, { request } from "express";
import {v5} from "uuid";

const app = express()

app.use(express.json())

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/task', (req, res) => {
    res.json([])
})

app.post('/task', (req, res) => {
    const {title, description} = req.body

    res.json({
        title,
        description,
        id: 2
    })
})

export default app