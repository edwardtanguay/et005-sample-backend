import express from 'express';
import cors from 'cors';
import * as model from './model.js';
const app = express();
app.use(cors());
const port = 3610;
app.get('/', (req, res) => {
    res.send(model.getApiInstructions());
});
app.get('/test', (req, res) => {
    res.json(model.getTest());
});
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map