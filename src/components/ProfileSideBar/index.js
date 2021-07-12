import { Box } from "../Box"

function ProfileSideBar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} />
    </Box>
  )
}

export default ProfileSideBar