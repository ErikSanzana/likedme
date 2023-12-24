import { getAllPosts, createOnePost } from "../src/controllers/controlPost.js";
import express from "express";

const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/posts', createOnePost);
//es lo solicitado

export default router;