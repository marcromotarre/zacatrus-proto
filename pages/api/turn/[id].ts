import getMethods from '../../../src/api/getMethods'
import getTurn from '../../../src/api/turn/get-turn'

const Player = async (req: any, res: any) => {
  getMethods({ req, res, get: getTurn })
}

export default Player
