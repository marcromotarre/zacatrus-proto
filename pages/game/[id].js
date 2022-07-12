import { Button } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { route } from 'next/dist/server/router'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Game = () => {
  const [game, setGame] = useState({})
  const [player, setPlayer] = useState({})
  const [error, setError] = useState(null)
  const router = useRouter()

  const [isAdmin, setIsAdmin] = useState(false)

  const getGame = async (id) => {
    const { data } = await axios.get(`${router.basePath}/api/game/${id}`)
    return data
  }

  const getPlayer = async (id) => {
    const { data } = await axios.get(`${router.basePath}/api/player/${id}`)
    return data
  }

  const addPlayerToGame = async ({ game: gameData, player: playerData }) => {
    if (gameData.players.length === 0) {
      setIsAdmin(true)
    } else if (gameData.players[0].id === playerData.id) {
      setIsAdmin(true)
    }

    if (gameData.players.some(({ id }) => id === playerData.id)) {
      return
    }

    if (gameData.players.length === 2) {
      return { error: 'game full' }
    }

    const { data } = await axios.put(
      `${router.basePath}/api/game/${gameData.id}`,
      {
        players: [{ id: playerData.id }],
      }
    )
    return data
  }

  const continuouslyUpdate = async ({ gameId }) => {
    const gameData = await getGame(gameId)
    if (!gameData.error) {
      if (gameData.status !== 'player-setup') {
        router.push(`${router.basePath}/character-selection/${game.id}`)
      }

      setGame(gameData)
    }
  }

  const goToNextScreen = async () => {
    const { data } = await axios.put(`${router.basePath}/api/game/${game.id}`, {
      status: 'character-selection',
    })
    router.push(`${router.basePath}/character-selection/${game.id}`)
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

        setInterval(() => {
          continuouslyUpdate({ gameId: gameData.id })
        }, 1000)
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
          <h1>Hi, {player.name}. Are You ready for the match</h1>
          <h1>GAME: </h1>

          <h2>id: {game?.id}</h2>
          <h2>createdAt: {game?.createdAt}</h2>
          {game?.players?.map(({ id, name }, index) => (
            <h3 key={id}>
              Player {index + 1}: {name}
            </h3>
          ))}

          {isAdmin && game.players.length < 2 && (
            <h1>Wating Other Player to Join</h1>
          )}
          {isAdmin && game.players.length === 2 && (
            <Button
              onClick={() => {
                goToNextScreen()
              }}
            >
              Start Game
            </Button>
          )}
          {!isAdmin && <h1>Wating Other Player to Start the game</h1>}
        </Box>
      )}
    </Box>
  )
}

export default Game
