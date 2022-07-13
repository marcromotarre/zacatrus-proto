import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Snackbar,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { route } from 'next/dist/server/router'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BgAvatars from '../../src/components/BgAvatars.js'
import BgHeader from '../../src/components/BgHeader.js'

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
      await axios.put(`${router.basePath}/api/player/${playerData.id}`, {
        isAdmin: true,
      })
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
    router.push(`${router.basePath}/character-selection/${data.id}`)
  }

  const loadAllGameData = async ({ gameId, playerId }) => {
    const gameData = await getGame(gameId)
    if (gameData.error) {
      setError(gameData.error)
    } else {
      setGame(gameData)
      const playerData = await getPlayer(playerId)
      if (playerData.error) {
        setError(playerData.error)
      } else {
        setPlayer(playerData)
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
    <Box
      sx={{
        width: '100vw',
        height: '100vH',
      }}
    >
      <BgHeader player={player} />

      {error && <h1>{error}</h1>}
      {!error && (
        <Box
          sx={{
            width: '100%',
            height: 'calc(100% - 50px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card sx={{ width: 500 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Game {game.id}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <BgAvatars players={game.players} />
                </Box>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              {isAdmin && game.players.length === 2 && (
                <Button
                  onClick={() => {
                    goToNextScreen()
                  }}
                  size="small"
                  color="primary"
                >
                  Empezar Partida
                </Button>
              )}
              {isAdmin && game.players.length < 2 && (
                <Alert severity="info">
                  Esperando a que un segundo jugador se una{' '}
                </Alert>
              )}
              {!isAdmin && game?.players?.length === 2 && (
                <Alert severity="info">
                  Esperando a que el Administrador Empieze partida
                </Alert>
              )}
            </CardActions>
          </Card>
        </Box>
      )}
    </Box>
  )
}

export default Game

/*

 {isAdmin && game.players.length === 2 && (
            <Button
              onClick={() => {
                goToNextScreen()
              }}
            >
              Start Game
            </Button>
          )}
          {!isAdmin && (
            <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              open={true}
            >
              <Alert severity="info">
                Wating Other Player to Start the game
              </Alert>
            </Snackbar>
          )}
*/
