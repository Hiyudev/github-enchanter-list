import create from 'zustand';

interface TrophyStoreState {
  transparentBackground: boolean;
  setTransparentBackground: (transparentBackground: boolean) => void;
  frame: boolean;
  setFrame: (frame: boolean) => void;
  rows: number;
  setRows: (rows: number) => void;
  columns: number;
  setColumns: (columns: number) => void;
}

export const useTrophy = create<TrophyStoreState>()((set) => ({
  transparentBackground: false,
  setTransparentBackground: (transparentBackground: boolean) =>
    set((state) => ({
      ...state,
      transparentBackground,
    })),
  frame: false,
  setFrame: (frame: boolean) => set((state) => ({
    ...state,
    frame,
  })),
  rows: 1,
  setRows: (rows: number) => set((state) => ({
    ...state,
    rows,
  })),
  columns: 6,
  setColumns: (columns: number) => set((state) => ({
    ...state,
    columns,
  })),
}))
