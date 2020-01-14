const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const serve = require('koa-static');
var cors = require('koa-cors');
var path = require('path');
const app = new Koa();

app.use(logger());
app.use(serve('.'));
app.use(cors());
app.use(serve(path.join(__dirname, 'public')));
app.use(async (ctx, next) => {  
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});


const router = new Router();

require('./routes/routes')({ router });


app.use(router.routes());
app.use(router.allowedMethods());

// tell the server to listen to events on a specific port
const server = app.listen(5055);
module.exports = server;