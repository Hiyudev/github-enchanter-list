import fuzzysort from 'fuzzysort';
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
  const { page, limit, search } = req.query;

  const icons = getIcons();
  const list: SimpleIcon[][] = [];

  try {
    const queryPage = Number(page);
    const queryLimit = Number(limit);
    const querySearch = Array.isArray(search) ? search.join(" ") : search;

    if (!isNaN(queryPage) && !isNaN(queryLimit)) {
      let iconsList: SimpleIcon[] = icons;

      if (querySearch) {
        iconsList = fuzzysort.go(querySearch, icons, { keys: ['title', 'slug'] }).map((icon) => icon.obj);
      }

      while (iconsList.length > 0) {
        const chunk = iconsList.splice(0, queryLimit);
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
