import create from 'zustand';
import { BadgeStyles } from '../../@types';

interface BadgeStoreState {
  style: BadgeStyles;
  setStyle: (style: BadgeStyles) => void;
}

export const useBadge = create<BadgeStoreState>()((set) => ({
  style: 'plastic',
  setStyle: (style: BadgeStyles) => {
    set(() => ({
      style,
    }))
  },
}))
