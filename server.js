import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();
app.use(cors()); 
app.use(express.json());
app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//funciona 10/10 no tocar