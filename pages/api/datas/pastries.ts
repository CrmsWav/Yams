import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '../../../utils/connectMongo';
import Pastries from '../../../models/Pastries';

export default async function getDatas(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo()
    const datas = await Pastries.find();
    res.status(200).json(datas);
}
