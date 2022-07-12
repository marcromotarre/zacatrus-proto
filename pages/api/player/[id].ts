import prisma from '../../../lib/prisma'

const getPlayer = async (req: any, res: any) => {
  const { id } = req.query
  let player
  try {
    player = await prisma.player.findUnique({
      where: {
        id: parseInt(id),
      },
    })
  } catch (e) {
    res.status(401)
    res.json({ e })
    return
  }
  if (player) {
    res.json(player)
  } else {
    res.json({ error: `player with id ${id} not found` })
  }
}

const putPlayer = async (req: any, res: any) => {
  const { id } = req.query
  const { character } = req.body
  let player

  try {
    player = await prisma.player.update({
      where: {
        id: parseInt(id),
      },
      data: {
        character,
      },
    })
  } catch (e) {
    res.status(401)
    res.json({ e })
    return
  }
  if (player) {
    res.json(player)
  } else {
    res.json({ error: `player with id ${id} not found` })
  }
}

const Player = async (req: any, res: any) => {
  if (req.method === 'GET') {
    getPlayer(req, res)
    return
  }

  if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT') {
    putPlayer(req, res)
    return
  }
  res.json({ error: 'maximum error' })
}

export default Player
