import { Index, Articles, Write,Save} from '../controllers/'
import Router from 'koa-router'

const router =new Router()

router.get('/', Index)
router.get('/article/:id',Articles)
router.get('/writing',Write)
router.post('/writing/save',Save)


export default router