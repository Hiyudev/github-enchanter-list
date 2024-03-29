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

export interface Octicon {
  slug: string;
  keywords: string[];
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

export type BadgeStyles = 'plastic' | 'flat' | 'flat-square' | 'for-the-badge' | 'social';
export type CopyAsOptions = 'markdown' | 'html' | 'link';

export type Page = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
};

export type IconsList = {
  listName: string;
  icons: SimpleIcon[] | Octicon[];
}
