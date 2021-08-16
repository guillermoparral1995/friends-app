const express = require('express');
const app = express();

app.use(express.static('public'))

app.use('/dist', express.static('dist'))

app.listen(8080, () => console.log('Listening in port 8080'));
