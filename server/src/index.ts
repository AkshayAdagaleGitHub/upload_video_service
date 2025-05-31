import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.listen(8080, '0.0.0.0', () => { // Ensure it listens on 0.0.0.0
    console.log(`Server listening on port ${port}`);
});

// health‐check
app.get('/health', (_req: Request, res: Response) => {
    res.send('OK');
});

// example upload endpoint
app.get('/upload', (_req: Request, res: Response) => {
    res.send('Upload route');
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});