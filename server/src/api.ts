import express from 'express'
const api = express.Router()

api.get("/now", (req, res) => { 
  let data = {now: new Date().toISOString()}
  console.log("GET /now->", data)
  res.json(data)
})

api.post("/echo", (req, res) => { 
  let echo = req.body
  console.log("POST /echo-> ", echo)
  res.json({echo})
})

export default api
