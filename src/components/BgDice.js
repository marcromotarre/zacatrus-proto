import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const BgDice = ({ icon, opacity = 1 }) => {
  const lazyRoot = React.useRef(null)
  return (
    <Card sx={{ padding: 1, width: 'fit-content', opacity }}>
      <Image
        lazyRoot={lazyRoot}
        src={`/icons/${icon}.png`}
        width="30"
        height="30"
      />
    </Card>
  )
}

export default BgDice
