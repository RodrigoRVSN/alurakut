import useUser from "../../hooks/useUser";
import { AlurakutProfileSidebarMenuDefault } from "../../lib/AlurakutCommons";
import { Box } from "../Box"

function ProfileSideBar() {
  const { user } = useUser();

  return (
    <Box as="aside" >
      <img src={user.avatar_url} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${user.login}`}>@ {user.login}</a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box >
  )
}

export default ProfileSideBar