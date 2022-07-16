import { Prisma } from '@prisma/client'
import prisma from '../../../lib/prisma'

const Player = async (req: any, res: any) => {
  const { information, gameId } = req.body
  let turn
  try {
    turn = await prisma.turn.create({
      data: {
        information,
        Game: { connect: { id: gameId } },
      },
    })
  } catch (e) {
    res.status(401)
    res.json({ e, gameId, information })
  }
  if (turn) {
    res.json(turn)
  } else {
    res.json({ error: 'turn not created' })
  }
}

export default Player
