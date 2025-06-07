import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

const forceDatabaseRefresh = false;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(routes);

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});