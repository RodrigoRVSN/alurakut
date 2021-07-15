import { ProfileRelationsWrap } from "../ProfileRelationsWrap"

function CommunityWrap(communitys) {
  return (
    <ProfileRelationsWrap >
      <h2 className='smallTitle'>Comunidades ({communitys?.communitys?.length})</h2>
      <ul>
        {communitys?.communitys?.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.group} target="_blank">
                <img src={item.imageUrl} />

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

