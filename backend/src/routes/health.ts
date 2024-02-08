import express from 'express'
const router = express.Router()

router.get('/healthz', function (_req, res) {
    res.status(200).send({ api: 'up' })
  })
  
export default router