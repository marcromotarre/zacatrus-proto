import { Box, Button, Card, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BgAttack from '../../src/components/BgAttack'
import { characters } from '../../src/constants/characters'

const Character = () => {
  const router = useRouter()

  const [character, setCharacter] = useState(null)
  const [attackType, setAttackType] = useState(null)

  useEffect(() => {
    const { id } = router.query
    if (id) {
      setCharacter(characters[id])
      setAttackType(Object.keys(characters[id].attacks)[0])
    }
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
              flexDirection: 'column',
              justifyContent: 'center',
              alignIteam: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: 'Comic Book' }}>
              {character.name} is
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: 'Comication' }}>
              {character.superhero}
            </Typography>
          </Box>
          <Box
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
          </Box>
          <Typography
            sx={{ padding: 2, textAlign: 'center', fontFamily: 'Comic Book' }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Stack sx={{ width: '100%' }} direction="column" spacing={2}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-evenly"
              alignItems="center"
              sx={{ width: '100%' }}
            >
              {Object.keys(character.attacks).map((type) => (
                <Button
                  sx={
                    attackType === type
                      ? {
                          border: '1px solid black',
                          fontFamily: 'Comic Book',
                        }
                      : { fontFamily: 'Comic Book' }
                  }
                  onClick={() => setAttackType(type)}
                >
                  {type}
                </Button>
              ))}
            </Stack>
            <Box display="flex" justifyContent="center">
              <Stack
                width="90%"
                direction="column"
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                {character.attacks[attackType].map((attack) => (
                  <BgAttack key={attack.name} attack={attack} />
                ))}
                <Box height="50px" />
              </Stack>
            </Box>
          </Stack>
        </Stack>
      )}
    </Box>
  )
}

export default Character
