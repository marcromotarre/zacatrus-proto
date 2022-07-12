import { Button, Link, TextField } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const GameMaster = () => {
  const handleClick = () => {}

  return (
    <Box>
      <Link onClick={handleClick} href="/game">
        CREATE NEW GAME
      </Link>
    </Box>
  )
}

export default GameMaster
