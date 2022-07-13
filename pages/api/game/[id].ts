import getMethods from '../../../src/api/getMethods'
import getGame from '../../../src/api/game/get-game'
import putGame from '../../../src/api/game/put-game'

const Game = async (req: any, res: any) => {
  getMethods({ req, res, get: getGame, put: putGame })
}

export default Game
