import { getConstratColor } from "../lib/color";
import { urlEncode } from "./string";
import { urls } from "./url";

type generateBadgeURLProps = {
  labelhex: string;
  label?: string;
  title?: string;
  style: string;
  slug: string;
  titlehex?: string;
  custom?: boolean;
}

export function generateBadgeURL({ labelhex, label, title, style, slug, titlehex, custom = false }: generateBadgeURLProps): string {
  const logoColor = label?.length > 0 ? 'fff' : getConstratColor(labelhex);
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

  let baseUrl = custom ? "https://custom-icon-badges.herokuapp.com" : "https://img.shields.io";

  const templateUrl = `${baseUrl}/badge/${labelText}${messageText}-${titlehex}`

  const url: string = urls(templateUrl, {
    [`style=${style}`]: true,
    [`logo=${slug}`]: true,
    [`logoColor=${logoColor}`]: style != 'social',
    [`labelColor=${labelhex}`]: label?.length > 0 && labelhex.length > 0,
  });

  return url;
}
