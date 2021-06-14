import {NextApiRequest, NextApiResponse} from 'next';

export default(request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Lulu'},
        {id: 2, name: 'Lele'},
        {id: 3, name: 'Lili'},
    ]
    return response.json(users);
}