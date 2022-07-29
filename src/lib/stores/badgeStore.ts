import create from 'zustand';
import { BadgeStyles } from '../../@types';

interface BadgeStoreState {
  style: BadgeStyles;
  setStyle: (style: BadgeStyles) => void;
  search: string;
  setSearch: (query: string) => void;
  label: string;
  setLabel: (label: string) => void;
  message: string;
  setMessage: (message: string) => void;
  custom: boolean;
  setCustom: (custom: boolean) => void;
  useLabelColor: boolean;
  setUseLabelColor: (useLabelColor: boolean) => void;
  useMessageColor: boolean;
  setUseMessageColor: (useMessageColor: boolean) => void;
  labelColor: string;
  setLabelColor: (labelColor: string) => void;
  messageColor: string;
  setMessageColor: (messageColor: string) => void;
}

export const useBadge = create<BadgeStoreState>()((set) => ({
  style: 'plastic',
  setStyle: (style: BadgeStyles) => {
    set((state) => ({
      ...state,
      style,
    }))
  },
  search: '',
  setSearch: (query) => set((state) => ({ ...state, search: query })),
  label: '',
  setLabel: (label) => set((state) => ({ ...state, label: label })),
  message: '',
  setMessage: (message) => set((state) => ({ ...state, message: message })),
  custom: false,
  setCustom: (custom) => set((state) => ({ ...state, custom: custom })),
  useLabelColor: false,
  setUseLabelColor: (useLabelColor) => set((state) => ({ ...state, useLabelColor: useLabelColor })),
  useMessageColor: false,
  setUseMessageColor: (useMessageColor) => set((state) => ({ ...state, useMessageColor: useMessageColor })),
  labelColor: '',
  setLabelColor: (labelColor) => set((state) => ({ ...state, labelColor: labelColor })),
  messageColor: '',
  setMessageColor: (messageColor) => set((state) => ({ ...state, messageColor: messageColor })),
}))
