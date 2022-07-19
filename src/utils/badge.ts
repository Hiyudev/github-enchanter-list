import { getConstratColor } from "../lib/color";

export function generateBadgeURL(title: string, hex: string, slug: string): string {
  const logoColor = getConstratColor(hex);

  const url = `https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${slug}&logoColor=${logoColor}`;
  return url;
}
