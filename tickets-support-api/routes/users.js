const connection = require('../connection');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const { user, password } = req.body;
  var success = false;
  connection.query("SELECT name, role FROM users WHERE user = ? AND password = ?", [user, password],function(err, rows, fields) {
    if (err) {
      console.log('ERROR EN EL SERVIDOR');
      res.send(500);
    } else {
      res.status(200);
      let data = {};
      if (rows[0] !== undefined) {
        success = true;
        data = rows[0];
        data.success = success;
        res.send(data);
      } else {
        data.success = success
        res.send(data)
      }
    };
  });
});

module.exports = router;
