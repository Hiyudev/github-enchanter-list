export interface SimpleIcon {
  title: string;
  slug: string;
  svg: string;
  path: string;
  source: string;
  hex: string;
  guidelines?: string | undefined;
  license?:
  | {
    type: string;
    url: string;
  }
  | undefined;
}

export type Badge = {
  url: string;
  name: string;
}

export type Option = {
  icon?: React.ReactNode;
  label: string;
  value: string;
  defaultSelected?: boolean;
};
