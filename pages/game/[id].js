import { useRouter } from 'next/router'
import { useGame } from '../../lib/hooks'

const Game = () => {
  const router = useRouter()
  const { id } = router.query
  const gameData = useGame({ id })
  console.log(gameData)
  return (
    <div>
      <h1>GAME: </h1>
      <h2>id: {gameData?.game[0]?.id}</h2>
      <h2>createdAt: {gameData?.game[0]?.createdAt}</h2>
    </div>
  )
}

export default Game
