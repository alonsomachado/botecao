import { NowRequest, NowResponse } from '@now/node';

export default function (req: NowRequest, res: NowResponse){
    res.json({message: '@now/node teste' })
}