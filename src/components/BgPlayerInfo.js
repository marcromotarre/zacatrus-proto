import { Box, Button, Card, Modal, Stack, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BgAvatar from './BgAvatar.js'
import { useState } from 'react'
import { style } from '@mui/system'
import { characters } from '../constants/characters.js'
import BgAttack from './BgAttack.js'

const BgPlayerInfo = ({ player = {}, reverse = false }) => {
  const character = characters.find(({ name }) => player.character === name)

  const [open, setOpen] = useState(false)
  return (
    <Box>
      <Card sx={{ margin: 1 }}>
        <Stack
          direction={reverse ? 'row-reverse' : 'row'}
          spacing={2}
          sx={{ padding: 1 }}
        >
          <BgAvatar player={player} />
          <Card>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '100%',
                paddingLeft: 1,
                paddingRight: 1,
              }}
            >
              <Typography>{player.life}</Typography>
              <FavoriteIcon />
            </Stack>
          </Card>

          <Button onClick={() => setOpen(true)}> {player.character}</Button>
        </Stack>
      </Card>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card sx={{ width: '90vw', height: '90vh', overflowY: 'auto' }}>
            <Card sx={{ padding: 1, margin: 1 }}>
              <Typography>{character.name}</Typography>
            </Card>
            <Stack direction="column" spacing={2}>
              {character.attacks.map((attack) => (
                <BgAttack key={attack.name} attack={attack} />
              ))}
            </Stack>
          </Card>
        </Box>
      </Modal>
    </Box>
  )
}

export default BgPlayerInfo
