import prisma from '../../../lib/prisma'

const createGame = async (req: any, res: any) => {
  let game
  try {
    game = await prisma.game.create({
      data: { status: 'player-setup' },
    })
  } catch (e) {
    res.status(401)
    res.json({ haah: 'ole', e })
    return
  }
  if (game) {
    res.json({ ...game, created: true })
  } else {
    res.json({ error: 'game not created' })
  }
}

const Game = async (req: any, res: any) => {
  createGame(req, res)
  return
}

export default Game
