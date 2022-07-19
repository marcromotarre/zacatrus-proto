import { timeManDice } from '../dices'
import { backward, crossbow, defense, kick, punch, time } from '../faces'

const timeTravelGirl = {
  name: 'La Mujer del Tiempo',
  image: 'time-woman.jpg',
  life: 8,
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
        name: 'KICK',
        description: 'Toma revés',
        dices: [
          { face: kick },
          { face: kick, damage: '1' },
          { face: kick },
          { face: kick, damage: '2' },
          { face: kick, damage: '3' },
        ],
      },
      {
        name: '¡FLECHAZO!',
        description:
          'Aunque no me veas si escuchas el sonido del metal, estoy ahí',
        dices: [
          { face: crossbow },
          { face: crossbow, damage: '2' },
          { face: crossbow, damage: '4' },
          { face: crossbow, damage: '6' },
          { face: crossbow, damage: '8' },
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
          { face: crossbow },
          { face: crossbow, damage: '4' },
        ],
      },
      {
        name: 'COMBO #4',
        description: 'Combo #4 descripción',
        dices: [
          { face: crossbow },
          { face: crossbow },
          { face: crossbow },
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
          { face: crossbow },
          { face: crossbow, damage: '5' },
        ],
      },

      {
        name: 'COMBO #7',
        description: 'Combo #7 descripción',
        dices: [
          { face: crossbow },
          { face: crossbow },
          { face: crossbow },
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
          { face: time },
          { face: punch },
          { face: kick },
          { face: backward },
          { face: time, damage: '3' },
        ],
      },
      {
        titleIcon: 'imparable.png',
        name: 'SPECIAL #1',
        description: 'Special #1 descripción',
        dices: [
          { face: time },
          { face: time },
          { face: time },
          { face: punch },
          { face: punch, damage: '1' },
        ],
      },
      {
        titleIcon: 'imparable.png',
        name: 'SPECIAL #2',
        description: 'Special #2 descripción',
        dices: [
          { face: time },
          { face: time },
          { face: time },
          { face: kick },
          { face: kick, damage: '2' },
        ],
      },
      {
        titleIcon: 'imparable.png',
        name: 'SPECIAL #3',
        description: 'Special #3 descripción',
        dices: [
          { face: time },
          { face: time },
          { face: time },
          { face: backward },
          { face: backward, damage: '3' },
        ],
      },
      {
        name: 'SPECIAL #4',
        description:
          'Hazte invisible hasta el final de tu proximo turno. Mientras seas invisible no te pueden atacar ni parar tus golpes',
        dices: [{ face: time }, { face: time }, { face: time }, { face: time }],
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
          { face: crossbow },
          { face: crossbow },
          { face: crossbow },
          { face: crossbow },
          { face: crossbow, damage: '9' },
        ],
      },
      {
        name: 'SUPER #4',
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
  },
  dices: [timeManDice, timeManDice, timeManDice, timeManDice, timeManDice],
}

export default timeTravelGirl
