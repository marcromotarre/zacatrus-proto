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

const BgAttack = ({ attack }) => {
  return (
    <Card sx={{ width: 'fit-content', padding: 1 }}>
      <Typography variant="h6">{attack.name}</Typography>
      {attack.description && (
        <Typography variant="span">{attack.description}</Typography>
      )}
      {attack.type === 'incremental' && <BgAttackIncremental attack={attack} />}
      {attack.type === 'combination' && <BgAttackCombination attack={attack} />}
    </Card>
  )
}

export default BgAttack
