import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../shared/prisma';

export default async function (req: NextApiRequest, res: NextApiResponse) {
    await prisma.todo.create({
        data: req.body
    });
    res.end();
}