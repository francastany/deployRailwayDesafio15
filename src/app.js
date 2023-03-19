import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening in ${PORT}`));

app.get('/', (req, res) => {
    res.send('Hola Railway App... =)')
});

app.get('/env', (req, res) => {
    res.send(`Solicitado el entorno: ${process.env.PAPASCONQUESO}`)
});

app.get('/bye', (req, res) => {
    res.send('Adios Railway App =(')
});

app.get('/user', (req, res) => {
    if (process.env.ENVIRONMENT === 'production') {
        res.send('OBTENIENDO USUARIOS DE LA BASE DE DATOS PRODUCTIVA')
    } else {
        res.send(`OBTENIENDO USUARIOS DE LA BASE DE DATOS DE PRUEBA: ${process.env.TESTDB}`)
    };
})