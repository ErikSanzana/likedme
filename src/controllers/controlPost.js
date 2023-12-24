import { getPost, createPost } from "../models/modePost.js";

const handleErrorResponse = (res, error) => {
    res.status(500).json({ error: `Error al procesar la solicitud: ${error.message}` });
    console.error("Error al procesar la solicitud:", error);
};

const getAllPosts = async (res) => {
    try {
        const posts = await getPost();
        res.status(200).json(posts);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

const createOnePost = async (req, res) => {
    try {
        const { titulo, img, descripcion } = req.body;
        const post = await createPost({ titulo, img, descripcion });
        res.status(201).json(post);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export { getAllPosts, createOnePost };
