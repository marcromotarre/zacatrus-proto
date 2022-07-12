import prisma from '../../../lib/prisma'

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

const postGame = async (req: any, res: any) => {
  const { id } = req.query
  let game
  try {
    const upsertUser = await prisma.user.upsert({
      where: {
        email: 'viola@prisma.io',
      },
      update: {
        name: 'Viola the Magnificent',
      },
      create: {
        email: 'viola@prisma.io',
        name: 'Viola the Magnificent',
      },
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
  if (req.method === 'GET') {
    getGame(req, res)
    return
  }

  if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT') {
    putGame(req, res)
    return
  }
  res.json({ error: 'maximum error' })
}

export default Game
