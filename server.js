import { app } from './app.js';
import 'dotenv/config';

const { PORT } = process.env;

app.listen(PORT, () => console.log(`App is listening on Port: ${PORT}`));
