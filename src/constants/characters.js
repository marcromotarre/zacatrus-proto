import { invisibleManDice, timeManDice } from './dices'

const invisibleMan = {
  name: 'El hombre invisible',
  life: 10,
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
  life: 8,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  attacks: [{}],
  superAttacks: [],
  dices: [
    timeManDice,
    timeManDice,
    timeManDice,
    timeManDice,
    timeManDice,
  ],
}

export const characters = [invisibleMan, timeMan]
