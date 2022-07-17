import { invisibleManDice, timeManDice } from './dices.js'
import { invisibility, invisiblePunch, ironLever, kick, punch } from './faces.js'

const invisibleMan = {
  name: 'MAURICE JACOB',
  superhero: 'OBSCURIO',
  banner: 'invisible-banner.png',
  image: 'invisible-man-painted-character.png',
  life: 10,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  attacks: {
    basic: [
      {
        name: 'PUÑETAZO',
        description: 'Toma revés',
        dices: [
          { face: punch },
          { face: punch, damage: '1' },
          { face: punch },
          { face: punch, damage: '2' },
          { face: punch, damage: '3' },
        ],
      },
      {
        name: 'GOLPE SORPRESA',
        description: '¡Si no me ves, no puedes pararme!',
        dices: [
          { face: invisiblePunch },
          { face: invisiblePunch, damage: '1' },
          { face: invisiblePunch },
          { face: invisiblePunch, damage: '2' },
          { face: invisiblePunch, damage: '3' },
        ],
      },
      {
        name: 'KICK',
        description: 'Toma revés',
        dices: [
          { face: kick },
          { face: kick, damage: '2' },
          { face: kick, damage: '3' },
          { face: kick, damage: '4' },
          { face: kick, damage: '5' },
        ],
      },
      {
        name: '¡TOMA HIERRO!',
        description:
          'Aunque no me veas si escuchas el sonido del metal, estoy ahí',
        dices: [
          { face: ironLever },
          { face: ironLever },
          { face: ironLever, damage: '3' },
          { face: ironLever, damage: '5' },
          { face: ironLever, damage: '7' },
        ],
      },
    ],
    combo: [
      {
        name: 'COMBO #1',
        description: 'Combo #1 descripción',
        dices: [
          { face: punch },
          { face: punch },
          { face: punch },
          { face: kick },
          { face: kick, damage: '3' },
        ],
      },
      {
        name: 'COMBO #2',
        description: 'Combo #2 descripción',
        dices: [
          { face: kick },
          { face: kick },
          { face: kick },
          { face: punch },
          { face: punch, damage: '4' },
        ],
      },
      {
        name: 'COMBO #3',
        description: 'Combo #3 descripción',
        dices: [
          { face: punch },
          { face: punch },
          { face: punch },
          { face: ironLever },
          { face: ironLever, damage: '4' },
        ],
      },
      {
        name: 'COMBO #4',
        description: 'Combo #4 descripción',
        dices: [
          { face: ironLever },
          { face: ironLever },
          { face: ironLever },
          { face: punch },
          { face: punch, damage: '5' },
        ],
      },
      {
        name: 'COMBO #5',
        description: 'Combo #5 descripción',
        dices: [
          { face: kick },
          { face: kick },
          { face: kick },
          { face: ironLever },
          { face: ironLever, damage: '6' },
        ],
      },
      {
        name: 'COMBO #6',
        description: 'Combo #6 descripción',
        dices: [
          { face: kick },
          { face: kick },
          { face: kick },
          { face: ironLever },
          { face: ironLever, damage: '6' },
        ],
      },
      {
        name: 'COMBO #7',
        description: 'Combo #7 descripción',
        dices: [
          { face: ironLever },
          { face: ironLever },
          { face: ironLever },
          { face: kick },
          { face: kick, damage: '7' },
        ],
      },
    ],
    special: [
      {
        name: 'SPECIAL #1',
        description: 'Special #1 descripción',
        dices: [
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
          { face: punch },
          { face: punch, damage: '1' },
        ],
      },
      {
        name: 'SPECIAL #2',
        description: 'Special #2 descripción',
        dices: [
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
          { face: kick },
          { face: kick, damage: '1' },
        ],
      },
      {
        name: 'SPECIAL #3',
        description: 'Special #3 descripción',
        dices: [
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
          { face: ironLever },
          { face: ironLever, damage: '1' },
        ],
      },
    ],
    fatalities: [
      {
        name: 'FATALITY #1',
        description: 'FATALITY #1 descripción',
        dices: [
          { face: punch },
          { face: punch },
          { face: punch },
          { face: punch },
          { face: punch, damage: '5' },
        ],
      },
      {
        name: 'FATALITY #2',
        description: 'FATALITY #2 descripción',
        dices: [
          { face: kick },
          { face: kick },
          { face: kick },
          { face: kick },
          { face: kick, damage: '7' },
        ],
      },
      {
        name: 'FATALITY #3',
        description: 'FATALITY #3 descripción',
        dices: [
          { face: ironLever },
          { face: ironLever },
          { face: ironLever },
          { face: ironLever },
          { face: ironLever, damage: '7' },
        ],
      },
    ],
  },
  /*attacks: [
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
    },
  ],*/
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
  name: 'La Mujer del Tiempo',
  image: 'time-woman.jpg',
  life: 8,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  /*attacks: [
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
  ],*/
  superAttacks: [],
  dices: [timeManDice, timeManDice, timeManDice, timeManDice, timeManDice],
}

const speedWoman = {
  name: 'Speed Woman',
  image: 'speed-woman-painted-character.png',
  life: 8,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  dices: [timeManDice, timeManDice, timeManDice, timeManDice, timeManDice],
}

const metallicMan = {
  name: 'El Hombre metalico',
  image: 'metallic-man.jpg',
  life: 8,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  dices: [timeManDice, timeManDice, timeManDice, timeManDice, timeManDice],
}

export const characters = [invisibleMan, timeMan, speedWoman, metallicMan]
