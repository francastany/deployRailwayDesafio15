import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening in ${PORT}`));

app.get('/', (req, res) => {
    res.send('Hola Railway App... =)')
});