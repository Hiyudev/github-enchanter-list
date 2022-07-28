import create from 'zustand';

interface StreakStoreState {
  hideBorder: boolean;
  setHideBorder: (value: boolean) => void;
}

export const useStreak = create<StreakStoreState>()((set) => ({
  hideBorder: false,
  setHideBorder: (value) => set((state) => ({ ...state, hideBorder: value })),
}))
