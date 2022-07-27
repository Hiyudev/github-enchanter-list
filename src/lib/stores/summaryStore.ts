import create from 'zustand';

interface SummaryStoreState {
  url: string;
  setUrl: (url: string) => void;
  name: string;
  setName: (name: string) => void;
}

export const useSummary = create<SummaryStoreState>()((set) => ({
  url: '',
  setUrl: (url: string) => set(() => ({ url })),
  name: '',
  setName: (name: string) => set(() => ({ name })),
}))
