import { useState } from "react"
import { ProfileRelationsWrap } from "../ProfileRelationsWrap"

function CommunityWrap(communitys) {
  const [amount, setAmount] = useState(6)

  return (
    <ProfileRelationsWrap >
      <h2 className='smallTitle'>Comunidades ({communitys?.communitys?.length})</h2>
      <ul>
        {communitys?.communitys?.slice(0, amount).map((item) => {
          return (
            <li key={item.imageUrl}>
              <a href={item.group} target="_blank">
                <img src={item.imageUrl} />

                <span>{item.title}</span>
              </a>
            </li>
          )
        })}
      </ul>

      {amount < 30 && communitys.length > 6 && <button onClick={() => setAmount(c => c + 6)}>Ver mais</button>}
      {amount > 6 && <button onClick={() => setAmount(c => c - 6)}>Ver menos</button>}
    </ProfileRelationsWrap>
  )
}

export default CommunityWrap

