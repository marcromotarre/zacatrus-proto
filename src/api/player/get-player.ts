import prisma from "../../../lib/prisma"

const getPlayer = async (req: any, res: any) => {
    const { id } = req.query
    let player
    try {
      player = await prisma.player.findUnique({
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
      res.json({ error: `player with id ${id} not found` })
    }
  }

export default getPlayer
