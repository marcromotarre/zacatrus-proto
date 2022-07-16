import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import BgAvatar from './BgAvatar'

const BgDice = ({ attacker, defender, game }) => {
  const lazyRoot = React.useRef(null)
  return (
    <Card>
      <BgAvatar player={attacker} />
    </Card>
  )
}

export default BgDice
