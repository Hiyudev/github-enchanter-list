import fuzzysort from 'fuzzysort';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SimpleIcon } from 'simple-icons';
import { Badge, IconsList, Octicon } from '../../@types';
import { getOcticons } from '../../lib/octicons';
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
  const {
    page,
    limit,
    search,
    label,
    style,
    message,
    labelColor,
    messageColor,
    custom
  } = req.query;

  const badges: Badge[] = [];

  try {
    const queryPage = Number(page);
    const queryLimit = Number(limit);
    const queryLabel = typeof label == 'string' ? label : label?.join(' ');
    const queryStyle = typeof style == 'string' ? style : style?.join(' ');
    const queryMessage = typeof message == 'string' ? message : message?.join(' ');
    const queryLabelColor = typeof labelColor == 'string' ? labelColor : labelColor?.join(' ');
    const queryMessageColor = typeof messageColor == 'string' ? messageColor : messageColor?.join(' ');
    const isCustom = typeof custom == 'string' ? custom : custom?.join(' ');

    if (!isNaN(queryPage) && !isNaN(queryLimit)) {
      let iconsList: IconsList;

      if (isCustom == 'true') {
        const allIcons: Octicon[] = getOcticons();
        if (search) {
          const resultList = fuzzysort.go(search as string, allIcons, { keys: ['keywords', 'slug'] }).map((result) => result.obj);
          iconsList = {
            listName: 'custom',
            icons: resultList
          };
        } else {
          iconsList = {
            listName: 'custom',
            icons: allIcons
          };
        }
      } else {
        const allIcons: SimpleIcon[] = getIcons();
        if (search) {
          const resultList = fuzzysort.go(search as string, allIcons, { keys: ['title', 'slug'] }).map((result) => result.obj);
          iconsList = {
            listName: 'brand',
            icons: resultList
          }
        } else {
          iconsList = {
            listName: 'brand',
            icons: allIcons
          };
        }
      }


      const start = queryPage * queryLimit;
      const end = start + queryLimit;

      if (iconsList.listName == 'custom') {
        const icons = iconsList.icons as Octicon[];
        const requestedIcons: Octicon[] = icons.slice(start, end);

        requestedIcons.forEach((icon: Octicon) => {
          const url = generateBadgeURL({
            labelhex: queryLabelColor ?? "000000",
            titlehex: queryMessageColor ?? "000000",
            label: queryLabel,
            style: queryStyle,
            slug: icon.slug,
            title: queryMessage?.length > 0 ? queryMessage : icon.slug,
            custom: isCustom == 'true'
          });

          badges.push({
            url,
            name: icon.slug,
          });
        });

      } else {
        const icons = iconsList.icons as SimpleIcon[];
        const requestedIcons: SimpleIcon[] = icons.slice(start, end);

        requestedIcons.forEach((icon: SimpleIcon) => {
          const url = generateBadgeURL({
            labelhex: queryLabelColor ?? icon.hex,
            titlehex: queryMessageColor ?? icon.hex,
            label: queryLabel,
            style: queryStyle,
            slug: icon.slug,
            title: queryMessage?.length > 0 ? queryMessage : icon.title,
            custom: isCustom == 'true'
          });

          badges.push({
            url,
            name: icon.title,
          });
        });
      }

      return res.status(200).json({
        badges: badges,
        total: iconsList.icons.length
      });
    }

    throw new Error('Page and limit must be numbers');
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: err.message });
  }
};

export default getBadgesHandler;
