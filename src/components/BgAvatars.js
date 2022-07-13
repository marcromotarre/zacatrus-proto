import { Avatar, Badge, Box, Stack, styled } from '@mui/material'
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone'
const NUMBER_OF_PLAYERS = 2

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}))

const BgAvatars = ({ players = [], number = NUMBER_OF_PLAYERS }) => {
  function stringToColor(string) {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }
    /* eslint-enable no-bitwise */

    return color
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        {' '}
        {players.map(({ id, name, isAdmin }) => (
          <div key={id}>
            <Box>
              {isAdmin ? (
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={<NewReleasesTwoToneIcon />}
                >
                  <Avatar {...stringAvatar(name)} />
                </Badge>
              ) : (
                <Avatar {...stringAvatar(name)} />
              )}
            </Box>
          </div>
        ))}
      </Stack>
    </Box>
  )
}

export default BgAvatars
