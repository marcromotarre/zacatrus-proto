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
  attacks: { basic: [] },
}

export default metallicMan
