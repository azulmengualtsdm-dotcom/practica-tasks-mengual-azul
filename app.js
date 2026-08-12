import { Sequelize } from 'sequelize';
import express from 'express'

import { startDb } from './src/config/database.js';

import tasksRouter from './src/routes/tasks.routes.js';

import userRouter from './src/routes/users.routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Servidor funcionando perfectamente!');
});


app.use("/api/users", userRouter)
app.use("/api/tasks", tasksRouter)
app.listen(port, async () => {
    await startDb();
  console.log(` Servidor corriendo en el puerto ${port}`);
});


