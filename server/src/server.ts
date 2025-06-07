import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

const forceDatabaseRefresh = false;

// Serve static assets from Vite build
//app.use(express.static(path.resolve(__dirname, '../../client/dist')));
app.use(cors({
  origin: 'https://kanban-client-pitq.onrender.com',
  credentials: true,
}));
app.use(express.json());
app.use(routes);

// Only serve index.html for non-file requests (e.g., /login, /dashboard)
//app.get('*', (req, res) => {
  //if (!req.path.includes('.')) {
    //res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  //} else {
    //res.status(404).send('Not found');
  //}
//});

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});