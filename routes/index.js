import { Index, Articles, Write,Save,Upload} from '../controllers/'
import Router from 'koa-router'
import koaBody from 'koa-body'

const router =new Router()

router.get('/', Index)
router.get('/article/:id',Articles)
router.get('/writing',Write)
router.post('/writing/save',Save)
router.get('/upload',Upload)
router.post('/upload',Upload)


export default router