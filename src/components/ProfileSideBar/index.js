import useUser from "../../hooks/useUser";
import { Box } from "../Box"

function ProfileSideBar() {
  const { user } = useUser();

  return (
    <Box>
      <img src={user.avatar_url} />
    </Box>
  )
}

export default ProfileSideBar