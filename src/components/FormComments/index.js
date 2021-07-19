import useUser from "../../hooks/useUser";

function FormComments(props) {
  const { user } = useUser();

  function handleSubmitComments(e) {
    e.preventDefault()
    const dataForm = new FormData(e.target);
    const comments = {
      text: dataForm.get('text'),
      username: user.login,
      image: user.avatar_url,
    }

    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comments)
    }).then(async (res) => {
      const data = await res.json()
      const comment = data.registerCreated
      props.setComments([...props.comments, comment])
    })
  }

  return (
    <>
      <form onSubmit={e => handleSubmitComments(e)}>
        <div>
          <input required placeholder="Digite aqui o texto da postagem :D" name="text" aria-label="Digite aqui o texto da postagem :D" type="text" />
        </div>
        <button type="submit">Criar postagem</button>
      </form>
    </>
  )
}

export default FormComments
