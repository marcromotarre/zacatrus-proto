import { Avatar, Badge, Box, Stack, styled } from '@mui/material'
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone'
import BgAvatar from './BgAvatar'
const NUMBER_OF_PLAYERS = 2

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}))

const BgAvatars = ({ players = [] }) => {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        {' '}
        {players.map((player) => (
          <div key={player.id}>
            <Box>
              {player.isAdmin ? (
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={<NewReleasesTwoToneIcon />}
                >
                  <BgAvatar player={player} />
                </Badge>
              ) : (
                <BgAvatar player={player} />
              )}
            </Box>
          </div>
        ))}
      </Stack>
    </Box>
  )
}

export default BgAvatars
