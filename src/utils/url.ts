type Mapping = { [key: string]: boolean };
type URL = string;
type Argument = URL | Mapping;

export function urls(...args: Argument[]): string {
  let url = "";

  for (const arg of args) {
    const typeofElement = typeof arg;

    if (typeofElement === "string") {
      url += arg;
    }
    else if (typeofElement === "object") {
      const keys = Object.keys(arg);

      if (keys.length > 0) {
        url += "?";

        for (const key of keys) {
          if (arg[key]) {
            url += `${key}&`;
          }
        }

        url = url.slice(0, -1);
      }
    }
  }

  return url;
}
