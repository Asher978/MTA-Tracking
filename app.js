const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ProtoBuf = require('protobufjs');

const app = express();
const server = require('http').Server(app);
require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('public'));

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Pumping on ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const mtaRoutes = require('./routes/mta-routes');
app.use('/mta', mtaRoutes);

app.get('*', (req, res) => {
  res.status(404).send('not found!');
})