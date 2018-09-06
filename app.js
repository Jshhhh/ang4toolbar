const express = require('express');
const path = require('path');


const app = express();

app.use('/', express.static(path.join(__dirname, 'dist/ang4-tooblar/')));

const port = process.env.PORT || '3030';

app.listen(port, () => console.log(`listening on ${port}`));