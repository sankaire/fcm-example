import {Router} from "express";
import {home} from "../controllers";
import {tokenPushExample, topicPushExample} from "../controllers/pussExample.controller";
const router = Router()

router.get("/", home)
router.post("/topic", topicPushExample)
router.post("/token", tokenPushExample)

export const appRouter = router