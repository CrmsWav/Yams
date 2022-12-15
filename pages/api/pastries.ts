
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  _id: string
  pastries: Array<{
    name: string
    number: number
    order: number
  }>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    _id: "5c9b5b5b5b5b5b5b5b5b5b5b",
    pastries : [
        { "name" : "Fondant supreme" , "number" : 10, "order" : 1 },
        { "name" : "Cake tout Chocolat", "number" : 10,  "order" : 2},
        { "name" : "Cake Framboise chocolat", "number" : 10, "order" : 3},
        { "name" : "Brioche sucrée avec chocolat", "number" : 10, "order" : 4},
        { "name" : "Cake glacé fondant au chocolat", "number" : 10, "order" : 5},
        { "name" : "Eclairs au chocolat", "number" : 10, "order" : 6},
        { "name" : "Tarte poire chocolat", "number" : 10, "order" : 7},
        { "name" : "Banana  au chocolat", "number" : 10, "order" : 8}
    ]
})
}
