var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
require('./passport').config(passport);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var signupRouter = require('./routes/signup');

var app = express();

require('dotenv').config();

// sockect IO
var server = require('http').createServer(app);
var io = require('socket.io')(server, {
  pingTimeout: 1000,
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// cookie
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/signup', signupRouter)

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

// socket io connect
io.on('connection', function (socket) {
  console.log("On connection : ", socket.client.id);
  io.emit('personCnt', io.engine.clientsCount);

  // 클라이언트로부터의 메시지가 수신되면
  socket.on('chat', function (data) {
    console.log('Message from %s: %s', data.name, data.msg);

    var msg = {
      from: {
        name: data.name,
      },
      msg: data.msg
    };

    // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
    socket.broadcast.emit('chat', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected: ' + socket.name);
    io.emit('personCnt', io.engine.clientsCount)
    console.log('disconnect client 수', io.engine.clientsCount)
  })

  socket.on('disconnected', () => {
    io.emit('personCnt', io.engine.clientsCount)
  })

  socket.on('returnPersonCnt', () => {
    io.emit('personCnt', io.engine.clientsCount)
  })
  // socket.on('newenter', () => {
  //     io.emit('enter')
  // })

  socket.on('type', () => {
    socket.broadcast.emit('otherTyping')
  })


});

server.listen(3001);

module.exports = app;
