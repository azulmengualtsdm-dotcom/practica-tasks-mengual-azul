import { Sequelize } from 'sequelize';
import express from 'express'

import { startDb } from './src/config/database.js';

import './src/models/users.js'
import './src/models/tasks.js'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Servidor funcionando perfectamente!');
});

app.listen(port, async () => {
    await startDb();
  console.log(` Servidor corriendo en el puerto ${port}`);
});


