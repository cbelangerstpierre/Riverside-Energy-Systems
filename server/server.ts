import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// app.post('/api/statistics', (req: Request, res: Response) => {
//     const { data } = req.body;
//     // Handle the received data (e.g., store it in a database)
//     res.json({ success: true });
//   });

app.get('/api/hello', (req: Request, res: Response) => {
    console.log("Hello !");
    res.status(200).json({message: "HEy"});
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});