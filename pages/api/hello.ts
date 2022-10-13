// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../shared/prisma'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.user.findMany();
  res.json(result);
}