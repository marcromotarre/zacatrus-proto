import { Card, Box, Typography, Stack, Divider } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import BgDice from './BgDice'

const BgDefense = ({ name, description, value, required, backToHand }) => {
  const [used, setUsed] = useState(false)
  return (
    <Card
      onClick={() => setUsed(!used)}
      sx={{ padding: 2, width: '100%', opacity: used ? '0.2' : '1' }}
    >
      <Box
        sx={{
          display: 'grid',
          width: '96%',
          gridTemplateColumns: '10% 10% 10% 10% 10% 10% 10% 10% 10%',
          justifyItems: 'center',
          alignItems: 'center',
          columnGap: '2%',
          gridTemplateAreas: '"p8 p7 p6 p5 p4 p3 p2 p1 p0"',
        }}
      >
        {required.map((face, index) => (
          <BgDice gridArea={`p${index}`} face={face} />
        ))}
      </Box>
      <Typography sx={{ fontFamily: 'Comication' }} variant="h4">
        {name}
      </Typography>

      <Typography
        sx={{ fontFamily: 'Comic Book', fontSize: '14px' }}
        variant="span"
      >
        {description}
      </Typography>
      <Card sx={{ padding: 2, marginBottom: 1 }}>
        <Stack sx={{ justifyContent: 'center' }} direction="row">
          {value === 0 && (
            <Typography
              sx={{
                fontFamily: 'Comic Book',
                fontSize: '18px',
              }}
              variant="span"
            >
              Esta carta no tiene defensa
            </Typography>
          )}
          {[...Array(value)].map(() => (
            <Image
              src="/icons/defense.png"
              width={60}
              height={60}
              objectFit="contain"
            />
          ))}
        </Stack>
      </Card>
      {backToHand && (
        <Box>
          <Divider />
          <Box sx={{ height: '50px', width: '100%' }}>
            <Stack>
              <Typography
                sx={{
                  fontFamily: 'Comic Book',
                  fontSize: '14px',
                }}
                variant="span"
              >
                Vuelve a la mano con:
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  width: '96%',
                  gridTemplateColumns: '10% 10% 10% 10% 10% 10% 10% 10% 10%',
                  justifyItems: 'center',
                  alignItems: 'center',
                  columnGap: '2%',
                }}
              >
                {backToHand.map((face) => (
                  <BgDice face={face} />
                ))}
              </Box>
            </Stack>
          </Box>
        </Box>
      )}
    </Card>
  )
}

export default BgDefense
