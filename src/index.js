const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

app.use(require('./Routes/routes'));


app.listen(process.env.PORT || 3000);


