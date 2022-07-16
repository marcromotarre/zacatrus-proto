export const TURN_TYPES = {
  GAME_START: 'GAME_START',
}

export const getGameStartTurnData = ({ attacker, defender }) => ({
  type: TURN_TYPES,
  attacker,
  defender,
})

export const getTurnData = (info) => {
  if (info.type === TURN_TYPES.GAME_START) return getGameStartTurnData(info)
}
