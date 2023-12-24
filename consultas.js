import pg from 'pg'

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'likeme',
  password: 'admin',
  allowExitOnIdle:true
});

const getDate = async()=> {
    const result=await pool.query("SELECT NOW()")
    console.log(result)
}
getDate()