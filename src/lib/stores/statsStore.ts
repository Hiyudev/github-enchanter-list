import create from 'zustand';

interface StatsStoreState {
  url: string;
  setUrl: (url: string) => void;
  name: string;
  setName: (name: string) => void;
  reponame: string;
  setReponame: (reponame: string) => void;
  hideBorder: boolean;
  setHideBorder: (hideBorder: boolean) => void;
  compact: boolean;
  setCompact: (compact: boolean) => void;
}

export const useStats = create<StatsStoreState>()((set) => ({
  url: '',
  setUrl: (url: string) => set((state) => ({ ...state, url })),
  name: '',
  setName: (name: string) => set((state) => ({ ...state, name })),
  reponame: '',
  setReponame: (reponame: string) => set((state) => ({ ...state, reponame })),
  hideBorder: false,
  setHideBorder: (hideBorder: boolean) => set((state) => ({ ...state, hideBorder })),
  compact: false,
  setCompact: (compact: boolean) => set((state) => ({ ...state, compact })),
}))
