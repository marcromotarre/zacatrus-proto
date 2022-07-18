import { invisibleManDice } from '../dices.js'
import {
  invisibility,
  invisiblePunch,
  ironLever,
  kick,
  punch,
} from '../faces.js'

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
        titleIcon: 'imparable.png',
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
        name: 'AHORA ME VES',
        description: '',
        dices: [
          { face: punch },
          { face: kick },
          { face: ironLever },
          { face: invisiblePunch, damage: '3' },
        ],
      },
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
          { face: ironLever, damage: '5' },
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
          { face: kick, damage: '6' },
        ],
      },
    ],
    special: [
      {
        titleIcon: 'imparable.png',
        name: 'AHORA NO ME VES',
        description: '',
        dices: [
          { face: invisibility },
          { face: punch },
          { face: kick },
          { face: ironLever },
          { face: invisiblePunch, damage: '3' },
        ],
      },
      {
        titleIcon: 'imparable.png',
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
        titleIcon: 'imparable.png',
        name: 'SPECIAL #2',
        description: 'Special #2 descripción',
        dices: [
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
          { face: kick },
          { face: kick, damage: '2' },
        ],
      },
      {
        titleIcon: 'imparable.png',
        name: 'SPECIAL #3',
        description: 'Special #3 descripción',
        dices: [
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
          { face: ironLever },
          { face: ironLever, damage: '3' },
        ],
      },
      {
        name: 'SPECIAL #4',
        description:
          'Hazte invisible hasta el final de tu proximo turno. Mientras seas invisible no te pueden atacar ni parar tus golpes',
        dices: [
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
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
          { face: ironLever, damage: '9' },
        ],
      },
    ],
  },

  dices: [
    invisibleManDice,
    invisibleManDice,
    invisibleManDice,
    invisibleManDice,
    invisibleManDice,
  ],
}

export default invisibleMan
