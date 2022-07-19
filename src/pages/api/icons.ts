import type { NextApiRequest, NextApiResponse } from 'next';
import { getIcons } from '../../lib/simpleIcons';
import { SimpleIcon } from '../../types';

type Data = SimpleIcon[];

type ErrorResponse = {
  message: string;
};

const getIconsByPageHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) => {
  const { query } = req;
  const { page, limit } = query;

  const icons = getIcons();
  const list: SimpleIcon[][] = [];

  try {
    const queryPage = Number(page);
    const queryLimit = Number(limit);
    if (!isNaN(queryPage) && !isNaN(queryLimit)) {
      while (icons.length > 0) {
        const chunk = icons.splice(0, queryLimit);
        list.push(chunk);
      }

      const requestedPage = list[queryPage];

      return res.status(200).json(requestedPage);
    }

    throw new Error('Page and limit must be numbers');
  } catch (err) {
    return res.status(403).json({ message: err.message });
  }
};

export default getIconsByPageHandler;
