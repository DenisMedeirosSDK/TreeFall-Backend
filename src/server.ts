import path from 'path';

import 'dotenv/config';
import express from 'express';
import routes from './routes';
import cors from 'cors';

import 'express-async-errors';
import './database/connections';

// import errorHandler from './errors/handler';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// app.use(errorHandler);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server start on PORT');
});
