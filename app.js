const express = require('express');
const app = express();
app.use('/static', express.static('html'));
app.listen(3000);
console.log('listening on 3000');