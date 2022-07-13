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
import BgAvatar from '../../src/components/BgAvatar'
import BgAvatars from '../../src/components/BgAvatars'
import BgHeader from '../../src/components/BgHeader'
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

  const selectCharacter = async (characterName) => {
    const { data } = await axios.put(
      `${router.basePath}/api/player/${player.id}`,
      {
        character: characterName,
      }
    )
  }

  const deselectCharacter = async (characterName) => {
    await axios.put(`${router.basePath}/api/player/${player.id}`, {
      character: '',
    })
  }

  const goToNextScreen = async () => {
    const myCharacter = characters.find(({ name }) => me().character === name)

    const yourCharacter = characters.find(
      ({ name }) => you().character === name
    )

    await axios.put(`${router.basePath}/api/player/${me().id}`, {
      defenses: myCharacter.defenses,
      life: myCharacter.life,
    })
    await axios.put(`${router.basePath}/api/player/${you().id}`, {
      defenses: yourCharacter.defenses,
      life: yourCharacter.life,
    })

    const { data } = await axios.put(`${router.basePath}/api/game/${game.id}`, {
      status: 'play',
    })
    router.push(`${router.basePath}/play/${data.id}`)
  }

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vH',
      }}
    >
      <BgHeader player={player} />
      <BgAvatars players={game?.players ? game?.players : []} />
      {game && player && (
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
                {character.name === me().character && (
                  <Box>
                    <BgAvatar player={player} />
                    <Button
                      onClick={() => deselectCharacter(character.name)}
                      size="small"
                    >
                      Deseleccionar
                    </Button>
                  </Box>
                )}
                {character.name === you().character && (
                  <Box>
                    <BgAvatar player={you()} />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      This charactarer has been selected
                    </Typography>
                  </Box>
                )}
                {character.name !== me().character &&
                  character.name !== you().character && (
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
          <Button
            onClick={() => {
              goToNextScreen()
            }}
            size="small"
            color="primary"
          >
            Empezar Partida
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default GameMaster
