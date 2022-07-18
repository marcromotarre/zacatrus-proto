import { Card, Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const BgDice = ({ face, damage }) => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        '&::after': {
          content: '""',
          display: 'block',
          paddingBottom: '100%',
        },
      }}
    >
      <Card
        sx={{
          position: 'absolute',
          zIndex: '1',
          width: '100%',
          height: '100%',
        }}
      >
        <Box sx={{ postion: 'relative' }}>
          <Image
            sx={{ position: 'relative' }}
            src={`/icons/${face.icon}.png`}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Card>
      {damage && (
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '-50%',
            zIndex: '2',
            width: '75%',
            height: '75%',
          }}
        >
          <Box sx={{ postion: 'relative' }}>
            <Image src="/icons/hit.png" layout="fill" objectFit="contain" />
            <Typography
              sx={{
                zIndex: '3',
                position: 'absolute',
                color: 'white',
                left: 'calc(0px + 44%)',
                top: 'calc(0px + 13%)',
                fontFamily: 'Comication',
                fontSize: '6vw',
              }}
            >
              {damage}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default BgDice

/*
  <Card
        sx={{
          padding: 1,
          opacity,
          position: 'relative',
          height: '70px',
          width: '70px',
        }}
      >
        <Image
          lazyRoot={lazyRoot}
          src={`/icons/${icon}.png`}
          layout="fill"
          zIndex="1"
        />
      </Card>
      <Box
        sx={{
          position: 'absolute',
          top: 'calc(50% - 15px)',
          right: '-15px',
          zIndex: '2',
        }}
      >
        <Image
          lazyRoot={lazyRoot}
          src="/icons/hit.png"
          width="30"
          height="30"
        />
      </Box>

*/
