import { Router } from "express"
import { getAgenda ,createAgenda,updateAgenda, deleteAgenda, getAgenda1 } from '../controllers/agenda.controller.js'

const router = Router()


router.get('/agenda', getAgenda )

router.get('/agenda/:id', getAgenda1 )

router.post('/agenda', createAgenda )

router.put('/agenda/:id', updateAgenda )

router.delete('/agenda/:id', deleteAgenda )


export default router
