import create from 'zustand';

interface EditorStoreState {
  search: string;
  setSearch: (query: string) => void;
  copyAs: string;
  setCopyAs: (option: string) => void;
}

export const useEditor = create<EditorStoreState>()((set) => ({
  search: '',
  setSearch: (query) => set((state) => ({ search: query })),
  copyAs: '',
  setCopyAs: (option) => set((state) => ({ copyAs: option })),
}))
