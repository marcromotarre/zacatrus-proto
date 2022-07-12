import prisma from "../../lib/prisma"

const createGame = async (req: any, res: any) => {
  let game
  try {
    game = await prisma.game.create({
      data: {},
    })
  } catch (e) {
    res.status(401)
    res.json({ e })
    return
  }
  if (game) {
    res.json(game)
  } else {
    res.json({ error: 'game not created' })
  }
}

const Game = async (req: any, res: any) => {
  createGame(req, res)
  return
}

export default Game
