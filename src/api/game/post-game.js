
const getGame = async (req: any, res: any) => {
  const { id } = req.query
  let game
  try {
    game = await prisma.game.findUnique({
      where: {
        id: parseInt(id),
      },
      include: { players: true },
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

const putGame = async (req: any, res: any) => {
  const { id } = req.query
  const { players, status } = req.body
  let game

  try {
    game = await prisma.game.update({
      where: {
        id: parseInt(id),
      },
      data: {
        players: {
          connect: players,
        },
        status: status,
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
