import prisma from '../../../lib/prisma'

const putPlayer = async (req: any, res: any) => {
  const { id } = req.query
  const { character, isAdmin, defenses, life } = req.body
  let player

  try {
    player = await prisma.player.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        character,
        isAdmin,
        defenses,
        life,
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
export default putPlayer
