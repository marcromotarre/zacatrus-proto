import create from 'zustand'

const gameStore = create((set) => ({
  playerId: 0,
  setPlayerId: () => set((state) => ({ bears: state.playerId })),
}))

export default gameStore
