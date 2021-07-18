import { useState } from "react"
import { ProfileRelationsWrap } from "../ProfileRelationsWrap"
import useUser from '../../hooks/useUser'

function FriendsWrap(props) {
  const [amount, setAmount] = useState(6)
  const listFriends = props.items.slice(0, amount)
  const { user } = useUser();

  return (
    <ProfileRelationsWrap >
      <h2 className='smallTitle'>{props.title} ({props.title === "Seguindo" ? (user.followers) : (user.following)})</h2>
      <ul>
        {listFriends.map((item) => {
          return (
            <li key={item.id}>
              <a target="_blank" href={`https://github.com/${item.login}`}>
                <img src={item.avatar_url} />
                <span>{item.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
      {amount < 30 && props.items.length > 6 && <button onClick={() => setAmount(c => c + 6)}>Ver mais</button>}
      {amount > 6 && <button onClick={() => setAmount(c => c - 6)}>Ver menos</button>}
      {amount > 6 && <button onClick={() => setAmount(6)}>Reset</button>}
    </ProfileRelationsWrap>
  )
}

export default FriendsWrap
