import create from 'zustand';

interface EditorStoreState {
  search: string;
  setSearch: (query: string) => void
}

export const useEditor = create<EditorStoreState>()((set) => ({
  search: '',
  setSearch: (query) => set((state) => ({ search: query })),
}))
