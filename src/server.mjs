import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import goalRouter from './svr/d02crd/goalRouter.mjs'; // Adjust the path if necessary

import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.LISTENPORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the router module on the '/api/d02cr' path
app.use('/api/d02crd', goalRouter);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  
