import prisma from '../../lib/prisma'

const Player = async (req: any, res: any) => {
  const { name } = req.body
  let game
  try {
    game = await prisma.player.create({
      data: { name, character: '', life: 0, defenses: [] },
    })
  } catch (e) {
    res.status(401)
    res.json({ e })
    return
  }
  if (game) {
    res.json(game)
  } else {
    res.json({ error: 'player not created' })
  }
}

export default Player
