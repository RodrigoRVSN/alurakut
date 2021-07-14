import useUser from "../../hooks/useUser"
import { ProfileRelationsWrap } from "../ProfileRelationsWrap"

function FriendsWrap(props) {
  const listFriends = props.items.slice(0, 6)
  console.log(props.items)
  return (
    <ProfileRelationsWrap >
      <h2 className='smallTitle'>{props.title} ({props.items.length})</h2>
      <ul>
        {listFriends.map((item) => {
          return (
            <li key={item.id}>
              <a href={`https://github.com/${item.login}`}>

                <img src={item.avatar_url} />
                <span>{item.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsWrap>
  )
}

export default FriendsWrap