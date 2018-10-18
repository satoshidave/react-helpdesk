const express = require('express');
const connection = require('../connection');

const router = express.Router();

/* GET users listing. */
router.post('/', (req, res) => {
  const { user, password } = req.body;
  let success = false;
  connection.query('SELECT id, name, role FROM users WHERE user = ? AND password = ?', [user, password], (err, rows) => {
    if (err) {
      console.log('ERROR EN EL SERVIDOR');
      res.send(500);
    } else {
      res.status(200);
      let data = {};
      if (rows[0] !== undefined) {
        success = true;
        const [response] = rows;
        data = response;
        data.success = success;
        res.send(data);
      } else {
        data.success = success;
        res.send(data);
      }
    }
  });
});

module.exports = router;
