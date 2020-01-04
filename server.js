const express = require('express');
const path = require('path');

//Routers
const indexRouter = require('./routes/indexRouter');
const aboutRouter = require('./routes/aboutRouter');
const loginRouter = require('./routes/loginRouter');
const routesRouter = require('./routes/routesRouter');
const testRouter = require('./routes/testRouter');

const PORT = process.env.PORT || 8000;

const app = express();

//Setting up ejs as view-engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

//Setting static directories
app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/static', express.static(path.join(__dirname, '/node_modules/jquery/dist')));


app.listen(PORT, function() {
    console.log('Server running @ PORT-'+PORT);
});

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/about', aboutRouter);
app.use('/login', loginRouter);
app.use('/routes', routesRouter);