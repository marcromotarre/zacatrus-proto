import prisma from '../../../lib/prisma'

const getTurn = async (req: any, res: any) => {
  const { id } = req.query
  let player
  try {
    player = await prisma.turn.findUnique({
      where: {
        id: parseInt(id, 10),
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
    res.json({ error: `turn with id ${id} not found` })
  }
}

export default getTurn
