import { Box, Button, Card, Stack, Typography } from '@mui/material'

import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BgAvatar from '../../src/components/BgAvatar.js'
import BgPlayerInfo from '../../src/components/BgPlayerInfo.js'

const Game = () => {
  const [game, setGame] = useState(null)
  const [player, setPlayer] = useState({})
  const [error, setError] = useState(null)
  const [lastTurnId, setLastTurnId] = useState(null)
  const router = useRouter()

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
      setGame(gameData)
    }
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

        setInterval(() => {
          continuouslyUpdate({ gameId: gameData.id })
        }, 1000)
      }
    }
  }

  const me = () =>
    game.players[0].id === player.id ? game.players[0] : game.players[1]
  const you = () =>
    game.players[0].id === player.id ? game.players[1] : game.players[0]

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
      {game && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItem: 'center',
          }}
        >
          <BgPlayerInfo player={me()} />
          <BgPlayerInfo player={you()} reverse />
        </Box>
      )}
    </Box>
  )
}

export default Game
