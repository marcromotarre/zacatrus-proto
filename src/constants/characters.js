import { invisibleManDice, timeManDice } from './dices.js'
import {
  crossbow,
  invisibility,
  invisiblePunch,
  ironLever,
  kick,
  nothing,
  punch,
  time,
} from './faces.js'

const invisibleMan = {
  name: 'El hombre invisible',
  life: 10,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  attacks: [
    {
      name: 'GOLPE SORPRESA',
      type: 'incremental',
      description: 'Gasta 1 punto por dado. No se puede parar',
      combination: [invisiblePunch],
      power: (n) => n * 1,
    },
    {
      name: 'PUÑO',
      type: 'incremental',
      description: 'Gasta 1 punto por dado',
      combination: [punch],
      power: (n) => n * 1,
    },
    {
      name: 'PATADA',
      type: 'incremental',
      description: 'Gasta 2 puntos por dado',
      combination: [kick],
      power: (n) => n * 2,
    },
    {
      name: 'TOMA HIERRO',
      type: 'incremental',
      description: 'Gasta 3 puntos por dado',
      combination: [ironLever],
      power: (n) => n * 3,
    },
    {
      name: 'LLUVIA DE GOLPES',
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
    {
      name: '¡REINADO DE TERROR!',
      type: 'combination',
      attacks: [
        {
          description: 'Gasta 3 puntos al rival. No se puede parar',
          combination: [invisibility, invisibility, invisibility, punch, punch],
          power: () => 3,
        },
        {
          description: 'Gasta 6 puntos al rival. No se puede parar',
          combination: [invisibility, invisibility, invisibility, kick, kick],
          power: () => 6,
        },
        {
          description: 'Gasta 9 puntos al rival. No se puede parar',
          combination: [
            invisibility,
            invisibility,
            invisibility,
            ironLever,
            ironLever,
          ],
          power: () => 9,
        },
      ],
      combination: [ironLever],
    },
    {
      name: 'AHORA ME VES',
      type: 'combination',
      attacks: [
        {
          description: 'Gasta 8 puntos al rival',
          combination: [punch, kick, ironLever, invisiblePunch, nothing],
          power: () => 8,
        },
      ],
      combination: [ironLever],
    },
    {
      name: 'AHORA NO ME VES',
      type: 'combination',
      attacks: [
        {
          description: 'Gasta 8 puntos al rival',
          combination: [punch, kick, ironLever, invisibility, invisiblePunch],
          power: () => 8,
        },
      ],
      combination: [ironLever],
    },
    {
      name: 'MAXIMO PODER',
      type: 'combination',
      attacks: [
        {
          description: 'Gasta 10 puntos al rival',
          combination: [punch, punch, punch, punch, punch],
          power: () => 10,
        },
        {
          description: 'Gasta 10 puntos al rival. No se puede parar',
          combination: [
            invisiblePunch,
            invisiblePunch,
            invisiblePunch,
            invisiblePunch,
            invisiblePunch,
          ],
          power: () => 10,
        },
        {
          description: 'Gasta 15 puntos al rival.',
          combination: [kick, kick, kick, kick, kick],
          power: () => 15,
        },
        {
          description: 'Gasta 20 puntos al rival.',
          combination: [ironLever, ironLever, ironLever, ironLever, ironLever],
          power: () => 20,
        },
        {
          description: '+1 simbolo de niebla extra durante toda la partida.',
          combination: [
            invisibility,
            invisibility,
            invisibility,
            invisibility,
            invisibility,
          ],
          power: () => {},
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
  attacks: [
    {
      name: 'PUÑO',
      type: 'incremental',
      description: 'Gasta 1 punto por dado',
      combination: [punch],
      power: (n) => n * 1,
    },
    {
      name: 'PATADA',
      type: 'incremental',
      description: 'Gasta 2 puntos por dado',
      combination: [kick],
      power: (n) => n * 2,
    },
    {
      name: 'FLECHAZO',
      type: 'incremental',
      description: 'Gasta 3 puntos por dado',
      combination: [crossbow],
      power: (n) => n * 3,
    },
    {
      name: 'LLUVIA DE GOLPES',
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
          combination: [punch, punch, punch, crossbow, crossbow],
          power: () => 9,
        },
        {
          description: 'Gasta 11 puntos al rival',
          combination: [crossbow, crossbow, crossbow, punch, punch],
          power: () => 11,
        },
        {
          description: 'Gasta 12 puntos al rival',
          combination: [kick, kick, kick, crossbow, crossbow],
          power: () => 12,
        },
        {
          description: 'Gasta 13 puntos al rival',
          combination: [crossbow, crossbow, crossbow, kick, kick],
          power: () => 12,
        },
      ],
    },
    {
      name: '¡ANTES Y AHORA!',
      type: 'combination',
      attacks: [
        {
          description:
            'Gasta 3 puntos al rival. El rival en el proximo turno debera poner la defensa anter de que tu tires los dados',
          combination: [time, time, time, punch, punch],
          power: () => 3,
        },
        {
          description:
            'Gasta 6 puntos al rival. El rival en el proximo turno debera poner la defensa anter de que tu tires los dados',
          combination: [time, time, time, kick, kick],
          power: () => 6,
        },
        {
          description:
            'Gasta 9 puntos al rival. El rival en el proximo turno debera poner la defensa anter de que tu tires los dados',
          combination: [time, time, time, ironLever, ironLever],
          power: () => 9,
        },
      ],
    },
  ],
  superAttacks: [],
  dices: [timeManDice, timeManDice, timeManDice, timeManDice, timeManDice],
}

export const characters = [invisibleMan, timeMan]
