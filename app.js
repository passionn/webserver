import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import logger from 'koa-logger'
import koaStaticPlus from 'koa-static-plus'
import router from './routes'
import bodyParser from 'koa-bodyparser'
import koaBody from 'koa-body'
import multer  from 'multer'

import session from 'koa-session'

const app = new Koa()

app.use(logger())

app.use(koaStaticPlus(path.join(__dirname, './public')),{
   pathPrefix:''
})

//bodyparser:该中间件用于post请求的数据
app.use(koaBody({
  multipart: true
}));

// views
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}));

app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'login',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false, 
  renew: false,
};

app.use(session(CONFIG, app));

// app.use(ctx => {
//   // ignore favicon
//   if (ctx.path === '/favicon.ico') return;

//   let n = ctx.session.views || 0;
//   ctx.session.views = ++n;
//   ctx.body = n + ' views';
// });

// response router
app.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000, () => console.log('server started 3000'))

export default app