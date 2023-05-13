import express from 'express';
import cors from 'cors';
import * as path from 'path';

const app = express();
const port = 3000;

app.use(cors());
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
