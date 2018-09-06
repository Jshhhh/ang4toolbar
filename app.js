const express = require('express');
const path = require('path');


const app = express();

app.use('/', express.static(path.join(__dirname, 'dist/ang4-tooblar/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ang4-tooblar/index.html'));
});

const port = process.env.PORT || '3030';

app.listen(port, () => console.log(`listening on ${port}`));