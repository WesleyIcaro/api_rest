import app from './app';
import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-undef
app.listen(process.env.APP_PORT, () => {
  console.log();
  // eslint-disable-next-line no-undef
  console.log(`Escutando na porta ${process.env.APP_PORT}`);
  // eslint-disable-next-line no-undef
  console.log(`CTRL + clique em http://localhost:${process.env.APP_PORT}`);
});
