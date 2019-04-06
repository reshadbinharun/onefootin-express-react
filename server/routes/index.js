var express = require('express');
var router = express.Router();

/* Creates a pool of connections so that DB connections do not have to be created 
for every new DB call
*/
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}).get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM mentors');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

module.exports = router;
