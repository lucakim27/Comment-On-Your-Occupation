import { getComment, postComment, getCommentCount } from '../models/commentModel'
import { pool } from '../configs/db'
import express from 'express'
export const router = express.Router()
export default router

router.get('/getComment', function (req: any, res: any) {
  getComment(pool, res, req)
})

router.post('/postComment', function (req: any, res: any) {
  postComment(pool, res, req)
})

router.get('/getCommentCount', function (req: any, res: any) {
  getCommentCount(pool, res, req)
})