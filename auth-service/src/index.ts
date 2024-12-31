import express, { Request, Response } from 'express'
import bodyParse from 'body-parser'
import dotenv from 'dotenv'

// configurarion dotenv to work in your application
dotenv.config();
if(!process.env.PORT) console.log('No port value specified');
const app = express();
const PORT = process.env.PORT || 3000;

app.use( bodyParse.json() )

app.get('/', (req: Request, res: Response) => {
    res.send('Auth Service is running');
})

app.listen( PORT, () => {
    console.log(`Auth Service running on port ${PORT}`, '💻');
})
