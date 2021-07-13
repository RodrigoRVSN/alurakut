import { ProfileRelationsWrap } from "../ProfileRelationsWrap"

function CommunityWrap(communitys) {
  console.log('a')
  console.log(communitys)
  console.log(communitys.communitys)
  return (
    <ProfileRelationsWrap >
      <ul>
        {communitys.communitys.map((item) => {
          return (

            <li key={item.id}>
              <a href={`/users/${item.title}`}>
                <img src={item.image} />
                <span>{item.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsWrap>
  )
}

export default CommunityWrap