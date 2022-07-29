import data from '@primer/octicons/build/data.json';
import { Octicon } from '../@types';

export function getOcticons(): Octicon[] {
  const iconsData = Object.entries(data).map(([_, value]) => {
    return {
      slug: value.name,
      keywords: value.keywords
    };
  });

  return iconsData;
}
