import express from 'express'

import * as threadController from './controllers/thread.controller'
import * as replyController from './controllers/reply.controller'

const router = express.Router()

// Threads
router.post('/threads/:board', threadController.createThread)
router.get('/threads/:board', threadController.getThread)

// Replies
router.post('/replies/:board', replyController.postReply)

export default router
