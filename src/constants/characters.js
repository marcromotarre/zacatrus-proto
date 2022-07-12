import { invisibleManDice } from './dices'

const invisibleMan = {
  name: 'El hombre invisible',
  health: 10,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  attacks: [{}],
  superAttacks: [],
  dices: [
    invisibleManDice,
    invisibleManDice,
    invisibleManDice,
    invisibleManDice,
    invisibleManDice,
  ],
}


const timeMan = {
  name: 'El hombre del Tiempo',
  health: 8,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  attacks: [{}],
  superAttacks: [],
  dices: [
    invisibleManDice,
    invisibleManDice,
    invisibleManDice,
    invisibleManDice,
    invisibleManDice,
  ],
}

export const characters = [invisibleMan, timeMan]
