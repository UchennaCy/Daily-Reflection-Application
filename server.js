// server.js

import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({ 'message': 'Wow! I just created my first conscious endpoint, and its working fine' })
})

app.listen(3000)
console.log('app is running on port ', 3000)
