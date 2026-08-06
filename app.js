const express = require('express');

const startDb=require ('./src/config/database.js')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Servidor funcionando perfectamente!');
});

app.listen(port, () => {
    await startDb();
  console.log(`🚀 Servidor corriendo en el puerto ${port}`);
});
