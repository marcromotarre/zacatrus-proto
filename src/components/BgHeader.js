import { Box, Stack, Typography } from '@mui/material'
import BgAvatar from './BgAvatar'


const BgHeader = ({ player = {} }) => {
  return (
    <Box
      sx={{
        height: '50px',
        width: '100%',
        top: '0',
        paddingRight: '10px',
        right: '0',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        backgroundColor: '#FCFCFC',
      }}
    >
      {player?.username ? (
       <Stack direction="row" spacing={2}>
          <Typography>Hi, {player?.username}</Typography>
          <BgAvatar player={player} />
        </Stack>
      ) : (
        <Box />
      )}
    </Box>
  )
}

export default BgHeader
