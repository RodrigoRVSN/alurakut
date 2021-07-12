import useUser from "../../hooks/useUser"
import { ProfileRelationsWrap } from "../ProfileRelationsWrap"

function FollowingWrap() {
  const { following } = useUser()
  const listFollowing = following.slice(0, 6)
  return (
    <ProfileRelationsWrap >
      <h2 className='smallTitle'>Seguindo ({following.length})</h2>
      <ul>
        {listFollowing.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.avatar_url} />
              <span>{item.login}</span>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsWrap>
  )
}

export default FollowingWrap