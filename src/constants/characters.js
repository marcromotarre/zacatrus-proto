import { invisibleManDice, timeManDice } from './dices.js'
import { ironLever, kick, punch } from './faces.js'

const invisibleMan = {
  name: 'El hombre invisible',
  life: 10,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  attacks: [
    {
      name: 'puño',
      type: 'incremental',
      description: 'Gasta 1 punto por dado',
      combination: [punch],
      power: (n) => n * 1,
    },
    {
      name: 'patada',
      type: 'incremental',
      description: 'Gasta 2 puntos por dado',
      combination: [kick],
      power: (n) => n * 2,
    },
    {
      name: 'toma hierro',
      type: 'incremental',
      description: 'Gasta 3 puntos por dado',
      combination: [ironLever],
      power: (n) => n * 3,
    },
    {
      name: 'lluvia de golpes',
      type: 'combination',
      attacks: [
        {
          description: 'Gasta 7 puntos al rival',
          combination: [punch, punch, punch, kick, kick],
          power: () => 7,
        },
        {
          description: 'Gasta 8 puntos al rival',
          combination: [kick, kick, kick, punch, punch],
          power: () => 8,
        },
        {
          description: 'Gasta 9 puntos al rival',
          combination: [punch, punch, punch, ironLever, ironLever],
          power: () => 9,
        },
        {
          description: 'Gasta 11 puntos al rival',
          combination: [ironLever, ironLever, ironLever, punch, punch],
          power: () => 11,
        },
        {
          description: 'Gasta 12 puntos al rival',
          combination: [kick, kick, kick, ironLever, ironLever],
          power: () => 12,
        },
        {
          description: 'Gasta 13 puntos al rival',
          combination: [ironLever, ironLever, ironLever, kick, kick],
          power: () => 12,
        },
      ],
      combination: [ironLever],
    },
  ],
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
  dices: [timeManDice, timeManDice, timeManDice, timeManDice, timeManDice],
}

export const characters = [invisibleMan, timeMan]
