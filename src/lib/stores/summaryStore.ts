import create from 'zustand';

interface SummaryStoreState {
  githubUsername: string;
  setGithubUsername: (username: string) => void;
  url: string;
  setUrl: (url: string) => void;
  name: string;
  setName: (name: string) => void;
}

export const useSummary = create<SummaryStoreState>()((set) => ({
  githubUsername: '',
  setGithubUsername: (username: string) => set(() => ({ githubUsername: username })),
  url: '',
  setUrl: (url: string) => set(() => ({ url })),
  name: '',
  setName: (name: string) => set(() => ({ name })),
}))
