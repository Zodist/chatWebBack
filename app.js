var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
const { swaggerUi, specs } = require('./modules/swagger')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var userRouter = require('./routes/user');

var app = express();

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/uploads'));
// app.use('/images/', express.static('../assets/uploads/'));

const Country = require('./models/earth2');
var schedule = require('node-schedule');
const request = require('request');
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

console.log("time:", moment().format('YYYY-MM-DD HH:mm:ss'));

var scheduler = schedule.scheduleJob('0 0 */1 * * *', function () {
  const requestUrl_earth2 = 'https://earth2stats.net/api/get_countries';
  // const ak = 'cf2b4ee42c55630ff5723fc937b925e6'
  // const requestUrl_exchangeRatio = `http://api.exchangeratesapi.io/v1/latest?base=USD&access_key=${ak}`;
  // const requestUrl_exchangeRatio = `http://api.exchangeratesapi.io/v1/convert?access_key=${ak}&from=USD&to=KOR&amount=1`;
  // const requestUrl_exchangeRatio = 'http://api.exchangeratesapi.io/v1/latest?access_key=cf2b4ee42c55630ff5723fc937b925e6?base=USD'
  const requestUrl_exchangeRatio = 'https://earthquake.kr:23490/query/USDKRW'
  request(requestUrl_earth2, (err, response, body) => {

    if (err) console.log(err);
    let data = JSON.parse(body);
    data.forEach(element => {
      element.assume_total_price = element.marketplace_tile_value * element.total_sold_tiles;
    });
    // res.send(data);

    request(requestUrl_exchangeRatio, (err, response, body) => {
      if (err) console.log(err);
      const usdkrw = JSON.parse(body).USDKRW[0];
      // console.log(usdkrw);
      data.forEach(element => {
        element.new_tile_price = Math.round(element.new_tile_price * usdkrw);
        element.marketplace_tile_value = Math.round(element.marketplace_tile_value * usdkrw);
        element.assume_total_price = Math.round(element.assume_total_price * usdkrw);
        element.time = moment().toDate();
      });
      Country.insertMany(data);
    })
  })
});

const mongoConfig = require('./config/mongoConfig');
// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
// CONNECT TO MONGODB SERVER
mongoose.connect("mongodb://3.84.249.206:27017/test",
  {
    "auth": { "authSource": "admin" },
    "user": mongoConfig.user,
    "pass": mongoConfig.pass,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));


// cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

var sessionMiddleWare = session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  }
})
app.use(sessionMiddleWare);

// sockect IO
var server = require('http').createServer(app);
const webSocket = require("./socket");
webSocket(server, sessionMiddleWare);

app.use('/', indexRouter);

app.use('/api/users', usersRouter);

app.use('/api/user', userRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);

app.use('/api/todos', require('./routes/todos'));

app.use('/api/upload', require('./routes/upload'));
app.use('/api/download', require('./routes/download'));
app.use('/api/photolist', require('./routes/photo'))

app.use('/api/earth2', require('./routes/earth2'))

// CORS
// var cors = require('cors');
// app.use(cors());
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(3001);

module.exports = app;
