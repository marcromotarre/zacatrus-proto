import {
  defense,
  doubleDefense,
  errorSystem,
  eyeRay,
  kick,
  punch,
} from '../faces.js'

const metallicMan = {
  name: 'JAMIE LEE',
  superhero: 'ROBOT 001',
  banner: 'metallic-man.jpg',
  image: 'metallic-man.jpg',
  life: 8,
  defenses: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
  dices: [],
  faces: [punch, kick, eyeRay, defense, doubleDefense, errorSystem],
  attacks: {
    basic: [
      {
        name: 'BASIC #1',
        description: 'Description Basic #1',
        dices: [
          { face: punch, damage: '1' },
          { face: punch, damage: '2' },
          { face: punch, damage: '3' },
          { face: punch, damage: '4' },
          { face: punch, damage: '5' },
        ],
      },
      {
        name: 'BASIC #2',
        description: 'Description Basic #2',
        dices: [
          { face: kick, damage: '1' },
          { face: kick, damage: '2' },
          { face: kick, damage: '3' },
          { face: kick, damage: '4' },
          { face: kick, damage: '5' },
        ],
      },
      {
        name: 'BASIC #3',
        description: 'Description Basic #3',
        dices: [
          { face: eyeRay },
          { face: eyeRay, damage: '2' },
          { face: eyeRay, damage: '4' },
          { face: eyeRay, damage: '8' },
          { face: eyeRay, damage: '16' },
        ],
      },
    ],
    combo: [
      {
        name: 'COMBO #1',
        description: 'Description Combo #1',
        dices: [{ face: punch }, { face: kick }, { face: eyeRay, damage: '3' }],
      },
      {
        name: 'COMBO #2',
        description: 'Description Combo #1',
        dices: [
          { face: punch },
          { face: punch },
          { face: kick },
          { face: kick, damage: '4' },
        ],
      },
      {
        name: 'COMBO #3',
        description: 'Description Combo #3',
        dices: [
          { face: punch },
          { face: punch },
          { face: kick },
          { face: kick },
          { face: eyeRay, damage: '5' },
        ],
      },
    ],
    special: [
      {
        name: 'ERROR SYSTEM',
        description:
          'Cortocircuito, se cancela tu ataque y no puedes defender en tu siguiente turno',
        dices: [{ face: errorSystem }],
      },
      {
        name: 'FATAL ERROR',
        description:
          'Te atacas a ti mismo y no puedes defender tu siguiente ataque',
        dices: [{ face: errorSystem }, { face: errorSystem }],
      },
    ],
  },
}

export default metallicMan
