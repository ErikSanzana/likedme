import pg from 'pg';

const pool = new pg.Pool({
    user: 'postgres',
    database: 'likeme',
    host: 'localhost',
    password: 'admin',
    allowExitOnIdle: true,
    port: 5432,
});

try {
    await pool.query('SELECT NOW()');
    console.log('Database connected');
} catch (error) {
    console.log(error);
}

export default pool;