import * as icons from 'simple-icons/icons';
import { SimpleIcon } from '../types';

export function getIcons(): SimpleIcon[] {
  const iconsData = Object.entries(icons).map(([_, value]) => {
    return value;
  });

  return iconsData;
}