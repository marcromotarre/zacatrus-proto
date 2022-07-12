import { Box } from '@mui/system'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Game = () => {
  const [game, setGame] = useState({})
  const [player, setPlayer] = useState({})
  const [error, setError] = useState(null)
  const router = useRouter()

  const getGame = async (id) => {
    const { data } = await axios.get(`${router.basePath}/api/game/${id}`)
    return data
  }

  const getPlayer = async (id) => {
    const { data } = await axios.get(`${router.basePath}/api/player/${id}`)
    return data
  }

  const addPlayerToGame = async ({ game: gameData, player: playerData }) => {
    if (gameData.players.some(({ id }) => id === playerData.id)) {
      return
    }

    if (gameData.players.length === 2) {
      return { error: 'game full' }
    }

    const { data } = await axios.put(
      `${router.basePath}/api/game/${gameData.id}`,
      {
        id: gameData.id,
        players: [{ id: playerData.id }],
      }
    )
    return data
  }

  const loadAllGameData = async ({ gameId, playerId }) => {
    const gameData = await getGame(gameId)
    if (gameData.error) {
      setError(gameData.error)
    } else {
      console.log('gameData', gameData)
      setGame(gameData)
      const playerData = await getPlayer(playerId)
      if (playerData.error) {
        setError(playerData.error)
      } else {
        setPlayer(playerData)
        console.log('playerData', playerData)
        await addPlayerToGame({ game: gameData, player: playerData })
      }
    }
  }

  useEffect(() => {
    const playerId = localStorage.getItem('playerId')
    const { id } = router.query
    if (id) {
      loadAllGameData({ gameId: id, playerId })
    }
  }, [router.query])

  return (
    <Box>
      {error && <h1>{error}</h1>}
      {!error && (
        <Box>
          <h1>GAME: </h1>

          <h2>id: {game?.id}</h2>
          <h2>createdAt: {game?.createdAt}</h2>
          {game?.players?.map(({ id }, index) => (
            <h3 key={id}>Player {index + 1}</h3>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default Game
