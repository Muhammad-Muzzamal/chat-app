import express from 'express'
import http from 'http'
import ENV from "./src/config/env.config.js"

const app = express()

app.get("/", (req, res) => {
    return "Hello World"
})

app.listen(ENV.PORT, ()=> {
    console.log(`App is running on [http://localhost:${ENV.PORT}]`)
})