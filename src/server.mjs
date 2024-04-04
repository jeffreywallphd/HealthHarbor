import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import goalRouter from './svr/Finance/goalRouter.mjs';
import feedbackRouter from './svr/Finance/feedbackRouter.mjs';
import transactionsRouter from './svr/Finance/transactionsRouter.mjs';
import savingsTrackerRouter from './svr/Finance/savingsTrackerRouter.mjs';
import incomeRouter from './svr/Finance/incomeRouter.mjs';
import expenseRouter from './svr/Finance/expenseRouter.mjs';
import creditScoreRouter from './svr/Finance/creditScoreRouter.mjs';
import creditInsightsRouter from './svr/Finance/creditInsightsRouter.mjs';
import categoryRouter from './svr/Finance/categoryRouter.mjs';
import bureauRouter from './svr/Finance/bureauRouter.mjs';
import budgetRouter from './svr/Finance/budgetRouter.mjs';
import budgetCategoryAllocationRouter from './svr/Finance/budgetCategoryAllocationRouter.mjs';
import allocationRouter from './svr/Finance/allocationRouter.mjs';
import accountsRouter from './svr/Finance/accountsRouter.mjs';

import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.LISTENPORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Credit section
// router modules on the '/api/d02crd' path
app.use('/api/d02crd', goalRouter);
app.use('/api/d02crd', feedbackRouter);
app.use('/api/d02crd', transactionsRouter);
app.use('/api/d02crd', savingsTrackerRouter);
app.use('/api/d02crd', incomeRouter);
app.use('/api/d02crd', expenseRouter);
app.use('/api/d02crd', creditScoreRouter);
app.use('/api/d02crd', creditInsightsRouter);
app.use('/api/d02crd', categoryRouter);
app.use('/api/d02crd', bureauRouter);
app.use('/api/d02crd', budgetRouter);
app.use('/api/d02crd', budgetCategoryAllocationRouter);
app.use('/api/d02crd', allocationRouter);
app.use('/api/d02crd', accountsRouter);

//Mental section

// Other section


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


const { generateText } = require("E:\Python_Tutorial\PersonalWellnessPod\src\Controller\prototype.js"); // Import LLM function

// const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define API endpoint for handling chat messages
app.post('/api/chat', async(req, res) => {
    const userMessage = req.body.message;

    try {
        const botResponse = await generateText(userMessage);
        res.json({ message: botResponse });
    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});