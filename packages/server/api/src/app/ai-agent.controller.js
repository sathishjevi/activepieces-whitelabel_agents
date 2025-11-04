import express, { Request, Response } from 'express';
import axios from 'axios';

export const aiAgentRouter = express.Router();

aiAgentRouter.post('/run', async (req: Request, res: Response) => {
  try {
    const params = req.body;
    if (!params || Object.keys(params).length === 0) {
      throw new Error('Missing parameters');
    }

    // Example logic — replace with real AI call
    const result = {
      success: true,
      message: 'AI Agent executed successfully',
      input: params,
    };

    res.json(result);
  } catch (error: any) {
    console.error('AI Agent error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});
