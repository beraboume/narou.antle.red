const express = require('express');
const cors = require('cors');
const compression = require('compression');
const narou = require('narou-middleware');

const port = process.env.PORT || 59798;
const app = express();

app.set('json spaces', 2);
app.use(cors());
app.use(compression());
app.use(narou({ r18: true }));
app.listen(port, () => {
  console.log('listen to http://localhost:%s', port);
});
