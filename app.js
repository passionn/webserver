import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import logger from 'koa-logger'
import koaStaticPlus from 'koa-static-plus'
import router from './routes'


const app = new Koa()

app.use(logger())

app.use(koaStaticPlus(path.join(__dirname, './public')),{
   pathPrefix:''
})

// views
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

// response router
app.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000, () => console.log('server started 3000'))

export default app