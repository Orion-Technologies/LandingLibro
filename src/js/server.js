import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
//const { json } = require('express');
//const { write } = require('fs/promises');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola')
});

app.use(bodyParser.json());

app.post('/saveData', (req, res) => {
    const { nombre, correo } = req.body;
    const contactos = `${nombre},${correo}\n`;

    fs.appendFile('../js/registros.csv', contactos, (error) => {
        if(error) {
            console.error('Error al escribir en el archivo: ', error);
            res.status(500).send('Error al guardar los datos');
        } else {
            console.log('Datos guardados exitosamente');
            res.sendStatus(200);
        }
    });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});