import create from 'zustand';

interface CopyStoreState {
  copyAs: string;
  setCopyAs: (option: string) => void;
  githubUsername: string;
  setGithubUsername: (username: string) => void;
}

export const useEditor = create<CopyStoreState>()((set) => ({
  copyAs: '',
  setCopyAs: (option) => set(() => ({ copyAs: option })),
  githubUsername: '',
  setGithubUsername: (username) => set(() => ({ githubUsername: username })),
}))
