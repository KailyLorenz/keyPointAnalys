const express = require('express')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const xss = require('xss-clean')
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controlers/errorController')
const userRouter = require('./routes/userRoutes')
const cors = require('cors')
const app = express();
const path = require('path')
// set security HTTP Headers
app.use(helmet({
  contentSecurityPolicy: false
}))
app.use(cors())
// development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
// limit requests from same API
const limiter = rateLimit({
  max: 5,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour'
})
app.use('/api', limiter)

app.use(express.json({limit: '10kb'}));
app.use(xss())
// serving static files
app.use(express.static(`${__dirname}/public`))
// 3: ROUTES

app.use('/api/v1/users', userRouter)



// // for all http's methods
// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
// })

app.use(globalErrorHandler)
// for deploy
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist/kpd100'))

  console.log('production')
  // app.get('/*', (req, res) => {
  //   res.sendFile(
  //       path.join(__dirname, '../remult-angular-todo/browser', 'index.html')
  //   );
  // });


  app.get('*', (req, res) => {
    res.sendFile(
        path.resolve(
            __dirname, 'client', 'dist', 'kpd100', 'index.html'
        )
    )
  })
}
module.exports = app
