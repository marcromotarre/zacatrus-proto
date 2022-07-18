import { Avatar, Box, Card, Icon, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import BgDice from './BgDice'

const BgAttackIncremental = ({ attack }) => {
  const icon = attack?.combination[0].icon
  return (
    <Stack direction="row" spacing={1}>
      <BgDice icon={icon} />
      <BgDice icon={icon} opacity={0.3} />
      <BgDice icon={icon} opacity={0.3} />
      <BgDice icon={icon} opacity={0.3} />
      <BgDice icon={icon} opacity={0.3} />
    </Stack>
  )
}

const BgAttackCombination = ({ attack }) => {
  const attacks = attack?.attacks
  return (
    <Box>
      {attacks.map((combinatedAttack) => (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="span">{combinatedAttack.description}</Typography>
          <Stack direction="row" spacing={1}>
            {combinatedAttack.combination.map((combination) => (
              <BgDice icon={combination.icon} />
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  )
}

const BgAttackDefault = ({ attack }) => {
  return (
    <Box>
      <Box sx={{ marginTop: 2, position: 'relative', width: '100%' }}>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '16% 16% 16% 16% 16%',
              justifyItems: 'center',
              alignItems: 'center',
              columnGap: '4%',
            }}
          >
            {attack.dices.map(({ face, damage }) => (
              <BgDice face={face} damage={damage} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const BgAttack = ({ attack }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="start"
        alignItems="center"
      >
        <Typography sx={{ fontFamily: 'Comication' }} variant="h4">
          {attack.name}
        </Typography>
        {attack.titleIcon && (
          <Box>
            <Image
              src={`/icons/${attack.titleIcon}`}
              width={30}
              height={30}
              objectFit="contain"
            />
          </Box>
        )}
      </Stack>

      {attack.description && (
        <Typography
          sx={{ fontFamily: 'Comic Book', fontSize: '14px' }}
          variant="span"
        >
          {attack.description}
        </Typography>
      )}
      {!attack.type && <BgAttackDefault attack={attack} />}
      {attack.type === 'incremental' && <BgAttackIncremental attack={attack} />}
      {attack.type === 'combination' && <BgAttackCombination attack={attack} />}
    </Box>
  )
}

export default BgAttack
