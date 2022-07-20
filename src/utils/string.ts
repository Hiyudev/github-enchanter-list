export function urlEncode(text: string): string {
  return encodeURI(text).replaceAll("-", "_");
}
