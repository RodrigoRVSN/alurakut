import { CommentsFieldWrap } from "./styles.js"

function FieldComments(props) {

  return (
    <CommentsFieldWrap>
      <h2>Postagens ({props.comments?.length})</h2>
      <ul>
        {props.comments?.map((item) => {
          return (
            <section key={item.text} >
              <div className='textArea'>
                <img src={item.image} />
                <h4>@{item.username}</h4>
              </div>
              <h5>{item.text}</h5>
            </section>
          )
        })}
      </ul>
    </CommentsFieldWrap>
  )
}

export default FieldComments

