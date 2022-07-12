import { Prisma } from '@prisma/client'
import prisma from '../../../lib/prisma'

const a = async (req, res, id) => {
  const game = await prisma.game.findMany({
    where: {
      id: id
    },
  })
  res.json(game)
}

export default a
