import getMethods from '../../../src/api/getMethods'
import getPlayer from '../../../src/api/player/get-player'
import putPlayer from '../../../src/api/player/put-player'

const Player = async (req: any, res: any) => {
  getMethods({ req, res, get: getPlayer, put: putPlayer })
}

export default Player
