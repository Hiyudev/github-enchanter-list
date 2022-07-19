import { getConstratColor } from "../lib/color";

export function generateBadgeURL(title: string, hex: string, slug: string): string {
  const logoColor = getConstratColor(hex);
  const encodedTitle = encodeURI(title).replaceAll("-", "_");

  const url = `https://img.shields.io/badge/${encodedTitle}-${hex}?style=for-the-badge&logo=${slug}&logoColor=${logoColor}`;
  return url;
}
