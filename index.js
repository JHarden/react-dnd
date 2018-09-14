const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('index'))
  .get('/api/ping', (req, res) => {
    res.status(200).json("Welcome to our restful API");
  })
  .get('/api/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM legal')
      const results = { 'results': (result) ? result.rows : null }
      res.json({ results })
      client.release()
    } catch (err) {
      console.error(err)
      res.send('Error' + err)
    }
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
