import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { characters } from '../../src/constants/characters'

const GameMaster = () => {
  const router = useRouter()

  const [game, setGame] = useState(null)
  const [player, setPlayer] = useState(null)
  const [error, setError] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  const getGame = async (id) => {
    const { data } = await axios.get(`${router.basePath}/api/game/${id}`)
    return data
  }

  const getPlayer = async (id) => {
    const { data } = await axios.get(`${router.basePath}/api/player/${id}`)
    return data
  }

  const continuouslyUpdate = async ({ gameId }) => {
    const gameData = await getGame(gameId)
    if (!gameData.error) {
      if (gameData.status !== 'character-selection') {
        // router.push(`${router.basePath}/game/${game.id}`)
      }

      setGame(gameData)
    }
  }

  const me = () =>
    game.players[0].id === player.id ? game.players[0] : game.players[1]
  const you = () =>
    game.players[0].id === player.id ? game.players[1] : game.players[0]

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
        setInterval(() => {
          continuouslyUpdate({ gameId: gameData.id })
        }, 5000)
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

  const selectCharacter = async (characterName) => {
    console.log('characterName', characterName)
    const { data } = await axios.put(
      `${router.basePath}/api/player/${player.id}`,
      {
        character: characterName,
      }
    )
  }

  return (
    <Box>
      {player && <h1>Hi, {player.name}. Select a character</h1>}
      {game && (
        <Box>
          <h1>Players</h1>
          <h2>Player 1: {game.players[0].name}(Admin)</h2>
          <h2>Player 2: {game.players[1].name}</h2>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {characters.map((character) => (
              <Card
                key={character.name}
                sx={{ width: '200px', marginLeft: '20px' }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {character.name}
                  </Typography>
                </CardContent>

                <CardActions>
                  {character.name === me.character && (
                    <Button size="small">Desselectionar</Button>
                  )}
                  {character.name === you.character && (
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      This charactarer has been selected
                    </Typography>
                  )}
                  {character.name !== me.character &&
                    character.name !== you.character && (
                      <Button
                        onClick={() => selectCharacter(character.name)}
                        size="small"
                      >
                        Selectionar
                      </Button>
                    )}
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default GameMaster
