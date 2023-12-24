import pool from '../../database/conexion.js';

const getPost = async () => {
    let client;
    try {
        client = await pool.connect();
        const { rows } = await client.query('SELECT * FROM posts');
        return rows;
    } catch (error) {
        console.error('Error en getPost:', error);
        throw error;
    } finally {
        if (client) client.release();
    }
}

const createPost = async ({ titulo, img, descripcion }) => {
    let client;
    const query = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
    try {
        client = await pool.connect();
        const { rows } = await client.query(query, [titulo, img, descripcion]);
        return rows[0];
    } catch (error) {
        console.error('Error en createPost:', error);
        throw error;
    } finally {
        if (client) client.release();
    }
};



export { getPost, createPost };