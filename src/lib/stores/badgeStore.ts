import create from 'zustand';
import { BadgeStyles } from '../../@types';

interface BadgeStoreState {
  style: BadgeStyles;
  setStyle: (style: BadgeStyles) => void;
  search: string;
  setSearch: (query: string) => void;
  copyAs: string;
  setCopyAs: (option: string) => void;
  label: string;
  setLabel: (label: string) => void;
  message: string;
  setMessage: (message: string) => void;
}

export const useBadge = create<BadgeStoreState>()((set) => ({
  style: 'plastic',
  setStyle: (style: BadgeStyles) => {
    set(() => ({
      style,
    }))
  },
  search: '',
  setSearch: (query) => set(() => ({ search: query })),
  copyAs: '',
  setCopyAs: (option) => set(() => ({ copyAs: option })),
  label: '',
  setLabel: (label) => set(() => ({ label: label })),
  message: '',
  setMessage: (message) => set(() => ({ message: message })),
}))
