import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '../../utils/connectMongo';
import Yams from '../../models/yamsModel';

export default async function getPastries(req: NextApiRequest, res: NextApiResponse) {
    const { pastries } = req.body
    console.log('CONNECTING TO MONGO');
    await connectMongo()
    console.log('CONNECTED TO MONGO');
    console.log('CREATING DOCUMENT');
    const yams = await Yams.create({ pastries })
    console.log('CREATED DOCUMENT');
    res.json({ yams })
}
