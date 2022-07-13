import prisma from '../../../lib/prisma'

const putGame = async (req: any, res: any) => {
  const { id } = req.query
  const { players, status } = req.body
  let game

  try {
    game = await prisma.game.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        players: {
          connect: players,
        },
        status,
      },
    })
  } catch (e) {
    res.status(401)
    res.json({ id, players, e })
    return
  }
  if (game) {
    res.json(game)
  } else {
    res.json({ error: `game with id ${id} not found` })
  }
}

export default putGame
