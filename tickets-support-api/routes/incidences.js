const connection = require('../connection');
const express = require('express');
const router = express.Router();

router.post('/create', (req, res, next) => {
  const { subject, description, user_id } = req.body;
  let data = {
    success: false,
    message: null
  };
  console.log(req.body)
  if (subject !== undefined && description !== undefined && user_id !== undefined) {
    connection.query("INSERT INTO tickets (subject, description, status, comment, user_id) VALUES (?,?,?,?,?)", [subject, description, 0, 'Ticket abierto', user_id], (err, rows, fields) => {
      if (err) {
        console.log(err);
        data.message = 'ERROR EN EL SERVIDOR';
        res.send(data);
      } else {
        data.message = "TICKET CREADO CORRECTAMENTE";
        data.success = true;
        res.status(200);
        res.send(data);
      }
    })
  } else {
    data.message = "FALTAN DATOS POR RECIBIR";
    res.status(500);
    res.send(data);
  }
});

router.post('/get', (req, res) => {
  const { user_id } = req.body;
  let data = {
    message: null,
    success: false
  }
  if (user_id !== undefined) {
    connection.query("SELECT * FROM tickets WHERE user_id = ?", [user_id], (err, rows) => {
      if (err) {
        data.message = "ERROR EN EL SERVIDOR";
        res.status(500);
        res.send(data);
      } else {
        data.message = "RESPUESTA OK";
        data.success = true;
        data.data = rows;
        res.status(200);
        res.send(data);
      }
    })
  }
})

module.exports = router;