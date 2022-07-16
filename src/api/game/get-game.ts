import prisma from '../../../lib/prisma'

const getGame = async (req: any, res: any) => {
  const { id } = req.query
  let game
  try {
    game = await prisma.game.findUnique({
      where: {
        id: parseInt(id, 10),
      },
      include: { players: true, turns: true },
    })
  } catch (e) {
    res.status(401)
    res.json({ e })
    return
  }
  if (game) {
    res.json(game)
  } else {
    res.json({ error: `game with id ${id} not found` })
  }
}

export default getGame
