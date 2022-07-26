import { invisibleManDice } from '../dices.js'
import {
  defense,
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
  life: {
    total: 10,
    final: 3,
  },
  faces: [punch, kick, ironLever, invisiblePunch, invisibility, defense],
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
    super: [
      {
        name: 'SUPER #1',
        description: 'SUPER #1 descripción',
        dices: [
          { face: punch },
          { face: punch },
          { face: punch },
          { face: punch },
          { face: punch, damage: '5' },
        ],
      },
      {
        name: 'SUPER #2',
        description: 'SUPER #2 descripción',
        dices: [
          { face: kick },
          { face: kick },
          { face: kick },
          { face: kick },
          { face: kick, damage: '7' },
        ],
      },
      {
        name: 'SUPER #3',
        description: 'SUPER #3 descripción',
        dices: [
          { face: ironLever },
          { face: ironLever },
          { face: ironLever },
          { face: ironLever },
          { face: ironLever, damage: '9' },
        ],
      },
      {
        name: 'SUPER #4',
        description: 'Haz dos ataques seguidos siendo invisible',
        dices: [
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
          { face: invisibility },
        ],
      },
      {
        name: 'SUPER #5',
        description: 'Restaura todas tus defensas',
        dices: [
          { face: defense },
          { face: defense },
          { face: defense },
          { face: defense },
          { face: defense },
        ],
      },
    ],
    defenses: [
      {
        name: 'FINTA',
        description: 'Vuelve a la mano automaticamente despues de jugarla',
        value: 0,
        required: [],
      },
      {
        name: 'DEFENSA BASICA #1',
        description: 'Descripcion defensa basica #1',
        value: 1,
        required: [],
      },
      {
        name: 'DEFENSA BASICA #2',
        description: 'Descripcion defensa basica #2',
        value: 2,
        required: [],
      },
      {
        name: 'DEFENSA BASICA #3',
        description: 'Descripcion defensa basica #3',
        value: 3,
        required: [],
      },
      {
        name: 'DEFENSA BASICA #4',
        description: 'Descripcion defensa basica #4',
        value: 4,
        required: [],
      },

      {
        name: 'DEFENSA COMPLEJA #1',
        description: 'Descripcion defensa COMPLEJA #1',
        value: 1,
        required: [defense],
        backToHand: [defense, defense, defense],
      },
      {
        name: 'DEFENSA COMPLEJA #2',
        description: 'Descripcion defensa COMPLEJA #2',
        value: 2,
        required: [defense],
        backToHand: [defense, defense, defense],
      },
      {
        name: 'DEFENSA COMPLEJA #3',
        description: 'Descripcion defensa COMPLEJA #3',
        value: 3,
        required: [defense],
      },
      {
        name: 'DEFENSA COMPLEJA #4',
        description: 'Descripcion defensa COMPLEJA #4',
        value: 4,
        required: [defense],
      },

      {
        name: 'DEFENSA INVISIBLE #1',
        description: 'Descripcion defensa INVISIBLE #1',
        value: 3,
        required: [invisibility],
        backToHand: [invisibility, invisibility, invisibility],
      },
      {
        name: 'DEFENSA INVISIBLE #2',
        description: 'Descripcion defensa INVISIBLE #2',
        value: 4,
        required: [invisibility],
        backToHand: [invisibility, invisibility, invisibility],
      },
      {
        name: 'DEFENSA INVISIBLE #3',
        description: 'Descripcion defensa INVISIBLE #3',
        value: 5,
        required: [invisibility, invisibility],
        backToHand: [invisibility, invisibility, invisibility],
      },
      {
        name: 'DEFENSA INVISIBLE #4',
        description: 'Descripcion defensa INVISIBLE #4',
        value: 6,
        required: [invisibility, invisibility],
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
