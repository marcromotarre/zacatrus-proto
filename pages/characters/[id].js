import { Box, Button, Card, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BgAttack from '../../src/components/BgAttack'
import { characters } from '../../src/constants/characters'

const GameMaster = () => {
  const router = useRouter()

  const [character, setCharacter] = useState(null)

  useEffect(() => {
    const { id } = router.query
    setCharacter(characters[id])
  }, [router.query])

  return (
    <Box>
      {character && (
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              width: '100%',
              padding: 1,
              display: 'flex',
              justifyContent: 'center',
              alignIteam: 'center',
            }}
          >
            <Typography>{character.name}</Typography>
          </Box>
          <Card
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              width="200"
              height="200"
              src={`/images/${character.image}`}
            />
          </Card>
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {character.attacks.map((attack) => (
              <BgAttack key={attack.name} attack={attack} />
            ))}
          </Stack>
        </Stack>
      )}
    </Box>
  )
}

export default GameMaster
