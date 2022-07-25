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
  const logoColor = label?.length > 0 ? 'fff' : getConstratColor(hex);
  let labelText: string;

  if (label) {
    const text = label.replaceAll("{slug}", slug);
    const encodedLabel = urlEncode(text);
    labelText = `${encodedLabel}-`;
  } else {
    labelText = "";
  }

  const message = title.replaceAll("{slug}", slug);
  const messageText = urlEncode(message);

  const templateUrl = `https://img.shields.io/badge/${labelText}${messageText}-${hex}`

  const url: string = urls(templateUrl, {
    [`style=${style}`]: true,
    [`logo=${slug}`]: true,
    [`logoColor=${logoColor}`]: style != 'social',
  });

  return url;
}
