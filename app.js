import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import logger from 'koa-logger'
import koaStaticPlus from 'koa-static-plus'


const app = new Koa()

app.use(logger())

console.log( path.join(__dirname, '../public'))

app.use(koaStaticPlus(path.join(__dirname, '../public')),{
   pathPrefix:''
})

// views
app.use(views(path.join(__dirname, '../views'), {
  extension: 'ejs'
}))

// response
// response router
app.use(async (ctx, next) => {
  await require('./routes').routes()(ctx, next)
})

app.listen(3000, () => console.log('server started 3000'))

export default app