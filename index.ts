import express, { Express, Request, Response } from 'express';
const port: number = 8000;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('HELLO FROM EXRESS + TS');
});
app.get('/hi', (req: Request, res: Response) => {
  res.send('Hi And BYE');
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
