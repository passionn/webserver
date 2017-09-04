import indexCtrl from '../controllers/indexCtrl'
import articleCtrl from '../controllers/articleCtrl'
import writingCtrl from '../controllers/writingCtrl'
import Router from 'koa-router'

const router =new Router()

router.get('/', indexCtrl)
router.get('/article/:id',articleCtrl)
router.get('/writing',writingCtrl)


export default router