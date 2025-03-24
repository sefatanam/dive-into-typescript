import type { Request, Response, Application, NextFunction } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import your_luck from './some_calculation';
import { auth } from './middlewares/auth.middleware'

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

function generateToken(user:any){
  // jwt lib
  // with .env salt
  return 'testcode123';
}

app.get('/login', (req: Request, res: Response)=>{
  res.send({
    token: generateToken({})
  })
})

app.get('/api', (req: Request, res: Response, next: NextFunction) => {
  res.send(JSON.stringify(your_luck()));
});

app.get('/dev', (req: Request, res: Response) => {
  res.setHeader('token','testcode123')
  res.send({
    token: 'aiufdsbgubdsfgivudf'
  });
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});