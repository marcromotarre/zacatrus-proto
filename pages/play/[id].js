import { Box, Button, Card, Stack, Typography } from '@mui/material'

import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BgAvatar from '../../src/components/BgAvatar.js'
import BgPlayerInfo from '../../src/components/BgPlayerInfo.js'

const TURN_POSITION = {
  DEFENSOR_SELECT_DEFENSE_0: 'DEFENSOR_SELECT_DEFENSE_0',
  ATTACKER_ROLL_DICE_1: 'ATTACKER_TRHOW_1',
  DEFENSOR_SELECT_DEFENSE_1: 'DEFENSOR_SELECT_DEFENSE_1',
  ATTACKER_ROLL_DICE_2: 'ATTACKER_ROLL_DICE_2',
  DEFENSOR_SELECT_DEFENSE_2: 'DEFENSOR_SELECT_DEFENSE_2',
  ATTACKER_ROLL_DICE_3: 'ATTACKER_ROLL_DICE_3',
  DEFENSOR_SELECT_DEFENSE_3: 'DEFENSOR_SELECT_DEFENSE_3',
  ATTACK: 'ATTACK',
}

const Game = () => {
  const [game, setGame] = useState(null)
  const [player, setPlayer] = useState({})
  const [error, setError] = useState(null)
  const [lastTurnId, setLastTurnId] = useState(null)
  const [attacker, setAttacker] = useState(null)
  const [defender, setDefender] = useState(null)
  const [turnId, setTurnId] = useState(null)
  const router = useRouter()

  // select player

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
      const lastTurn = gameData.turns[gameData.turns.length - 1]
      const turnInfo = JSON.parse(lastTurn.information)
      console.log(turnInfo)
      setTurnId(lastTurn.id)
      setAttacker(turnInfo.attacker)
      setDefender(turnInfo.defender)

      setInterval(() => {
        continuouslyUpdate({ gameId: gameData.id })
      }, 3000)
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
      {game && attacker && defender && (
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
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card>
          <Card>
            {' '}
            <Stack direction="row" spacing={2} sx={{ padding: 1 }}>
              <BgAvatar player={attacker} />
              <Typography>Es el atacante</Typography>
            </Stack>
          </Card>
        </Card>
      </Box>
    </Box>
  )
}

export default Game
