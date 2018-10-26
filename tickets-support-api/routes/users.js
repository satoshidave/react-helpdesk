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

router.post('/allin', (req, res) => {
  const { role } = req.body;
  if (role === 1) {
    connection.query('SELECT id, user, name, role FROM users', (err, rows) => {
      if (err) {
        console.log('ERROR EN EL SERVIDOR');
        res.send(500);
      } else {
        const data = rows;
        res.status(200);
        res.send(data);
      }
    });
  }
});

router.post('/get', (req, res) => {
  const { id } = req.body;
  connection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
    res.send(rows[0]);
  });
});

router.post('/create', (req, res) => {
  const {
    name, user, password, role,
  } = req.body;
  const data = {
    success: false,
    message: null,
  };
  const hasKeys = Object.keys(req.body).length.toString();
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

router.post('/delete', (req, res) => {
  const { id, userId } = req.body;
  const data = {
    message: null,
    success: false,
  };
  console.log(userId !== 1)
  if (id <= 0 && userId !== 1 && userId === undefined) {
    data.message = 'NO AUTORIZADO';
    res.status(500);
    res.send(data);
  } else {
    connection.query('DELETE FROM users WHERE id = ?', [id], (err) => {
      if (err) {
        data.message = 'ERROR EN EL SERVIDOR';
        res.status(500);
        res.send(data);
      } else {
        data.message = 'RESPUESTA OK';
        data.success = true;
        res.status(200);
        res.send(data);
      }
    });
  }
});

module.exports = router;
