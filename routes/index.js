import { Index, Articles, Write,Save,Upload} from '../controllers/'
import { RquestData } from '../controllers/request'

import Router from 'koa-router'

const router =new Router()

router.get('/', Index)
router.get('/article/:id',Articles)
router.get('/writing',Write)
router.post('/writing/save',Save)
router.get('/upload',Upload)
router.post('/upload',Upload)
router.get('/getDate',RquestData)


export default router