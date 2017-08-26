import indexCtrl from '../controllers/indexCtrl.js'
import Router from 'koa-router'

const router =new Router()

router.get('/', indexCtrl)

export default router