import { ProfileRelationsWrap } from "../ProfileRelationsWrap"

function CommunityWrap({ communitysCms }) {
  return (
    <ProfileRelationsWrap >
      <h2 className='smallTitle'>Comunidades ({communitysCms?.communitysCms?.length})</h2>
      <ul>
        {communitysCms?.communitysCms?.map((item) => {
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

