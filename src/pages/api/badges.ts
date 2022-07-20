import fuzzysort from 'fuzzysort';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SimpleIcon } from 'simple-icons';
import { Badge } from '../../@types';
import { getConstratColor } from '../../lib/color';
import { getIcons } from '../../lib/simpleIcons';
import { urlEncode } from '../../utils/string';
import { urls } from '../../utils/url';

type Data = Badge[];

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

    if (!isNaN(queryPage) && !isNaN(queryLimit)) {
      let iconsList: SimpleIcon[] = allIcons;

      if (search) {
        iconsList = fuzzysort.go(search as string, allIcons, { keys: ['title', 'slug'] }).map((result) => result.obj);
      }

      const start = queryPage * queryLimit;
      const end = start + queryLimit;
      const requestedIcons = iconsList.slice(start, end);

      requestedIcons.forEach((icon) => {
        const logoColor = getConstratColor(icon.hex);
        const labelString = label ? `${urlEncode(label as string)}-` : "";
        const titleString = urlEncode(icon.title);

        const hasStyle = typeof style === "string" && style.length > 0;

        const templateUrl = `https://img.shields.io/badge/${labelString}${titleString}-${icon.hex}`

        const url: string = urls(templateUrl, {
          [`style=${style}`]: hasStyle,
          [`logo=${icon.slug}`]: true,
          [`logoColor=${logoColor}`]: true,
        });

        badges.push({
          url,
          name: icon.title,
        });
      });

      return res.status(200).json(badges);
    }

    throw new Error('Page and limit must be numbers');
  } catch (err) {
    console.log(err.message);
    return res.status(403).json({ message: err.message });
  }
};

export default getBadgesHandler;
