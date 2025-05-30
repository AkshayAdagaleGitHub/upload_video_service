import * as express from 'express';
import * as path    from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

// (example) serve API
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
});

// (optional) serve built frontend in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../dist')));
    app.get('*', (_req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    });
}

app.listen(PORT, () => {
    console.log(` Server listening on http://localhost:${PORT}`);
});