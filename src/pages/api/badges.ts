import fuzzysort from 'fuzzysort';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SimpleIcon } from 'simple-icons';
import { Badge } from '../../@types';
import { getIcons } from '../../lib/simpleIcons';
import { generateBadgeURL } from '../../utils/badge';

type Data = {
  badges: Badge[];
  total: number;
};

type ErrorResponse = {
  message: string;
};

const getBadgesHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) => {
  const { page, limit, search, label, style } = req.query;

  const allIcons = getIcons();
  const badges: Badge[] = [];

  try {
    const queryPage = Number(page);
    const queryLimit = Number(limit);
    const queryLabel = typeof label == 'string' ? label : label?.join(' ');
    const queryStyle = typeof style == 'string' ? style : style?.join(' ');

    if (!isNaN(queryPage) && !isNaN(queryLimit)) {
      let iconsList: SimpleIcon[] = allIcons;

      if (search) {
        iconsList = fuzzysort.go(search as string, allIcons, { keys: ['title', 'slug'] }).map((result) => result.obj);
      }

      const start = queryPage * queryLimit;
      const end = start + queryLimit;
      const requestedIcons = iconsList.slice(start, end);

      requestedIcons.forEach((icon) => {
        const url = generateBadgeURL({
          hex: icon.hex,
          title: icon.title,
          label: queryLabel,
          style: queryStyle,
          slug: icon.slug
        });

        badges.push({
          url,
          name: icon.title,
        });
      });

      return res.status(200).json({
        badges: badges,
        total: iconsList.length
      });
    }

    throw new Error('Page and limit must be numbers');
  } catch (err) {
    console.log(err.message);
    return res.status(403).json({ message: err.message });
  }
};

export default getBadgesHandler;
