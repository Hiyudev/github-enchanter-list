import { getConstratColor } from "../lib/color";
import { urlEncode } from "./string";
import { urls } from "./url";

type generateBadgeURLProps = {
  hex: string;
  label?: string;
  title?: string;
  style: string;
  slug: string;
}

export function generateBadgeURL({ hex, label, title, style, slug }: generateBadgeURLProps): string {
  const logoColor = getConstratColor(hex);
  let labelText: string;

  if (label) {
    const encodedLabel = urlEncode(label);
    labelText = `${encodedLabel}-`;
  } else {
    labelText = "";
  }

  const messageText = urlEncode(title);

  const templateUrl = `https://img.shields.io/badge/${labelText}${messageText}-${hex}`

  const url: string = urls(templateUrl, {
    [`style=${style}`]: true,
    [`logo=${slug}`]: true,
    [`logoColor=${logoColor}`]: style != 'social',
  });

  return url;
}
