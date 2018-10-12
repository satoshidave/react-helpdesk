const connection = require('../connection');
const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  const { name, user, password, role } = req.body;
  let data = {
    success: false,
    message: null
  }
  console.log(req.body)
  const hasKeys = Object.keys(req.body).length.toString()
  if (hasKeys === '0') {
    data.message = 'No se han recibido datos';
    res.status(500);
    res.send(data);
  } else {
    if (name !== undefined && user !== undefined && password !== undefined && role !== undefined) {
      connection.query("INSERT INTO users (user, password, name, role) VALUES (?,?,?,?)", [user, password, name, role], function(err, rows, fields) {
        if (err) {
          console.log(err)
          data.message = 'ERROR EN EL SERVIDOR';
          res.send(data)
        } else {
          data.success = true;
          data.message = 'USUARIO CREADO CORRECTAMENTE';
          res.status(200);
          res.send(data);
        };
      });
    } else {
      data.message = 'Faltan datos por recibir';
      res.status(500);
      res.send(data);
    }
  }
});

module.exports = router;
