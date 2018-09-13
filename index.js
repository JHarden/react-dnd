const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('index'))
  .get("/api/ping", (req, res) => {
    res.status(200).json("Welcome to our restful API");
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
