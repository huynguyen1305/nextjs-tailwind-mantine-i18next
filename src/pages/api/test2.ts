import type { NextApiRequest, NextApiResponse } from 'next';

// Fake users data
const users = [{ id: 3 }, { id: 2 }, { id: 1 }];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(users);
}
