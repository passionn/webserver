import Koa from 'koa'
import logger from 'koa-logger'

const app = new Koa()

app.use(logger())


// response
app.use(async (ctx) => {
  ctx.body = 'Hello World!'
})

app.listen(3000, () => console.log('server started 3000'))

export default app