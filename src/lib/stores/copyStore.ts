import create from 'zustand';

interface CopyStoreState {
  copyAs: string;
  setCopyAs: (option: string) => void;
}

export const useCopy = create<CopyStoreState>()((set) => ({
  copyAs: '',
  setCopyAs: (option) => set(() => ({ copyAs: option })),
}))
