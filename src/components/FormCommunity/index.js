function FormCommunity(props) {

  function handleSubmitCommunity(e) {
    e.preventDefault()
    const dataForm = new FormData(e.target);
    const community = {
      id: new Date().toISOString(),
      title: dataForm.get('title'),
      image: dataForm.get('image'),
      group: dataForm.get('group')
    }
    props.setCommunitys([...props.communitys, community])
  }

  return (
    <>
      <h2 className="subtitle">O que você deseja fazer?</h2>
      <form onSubmit={e => handleSubmitCommunity(e)}>
        <div>
          <input required placeholder="Qual vai ser o nome da sua comunidade?" name="title" aria-label="Qual vai ser o nome da sua comunidade?" type="text" />
        </div>
        <div>
          <input required placeholder="Qual a URL da foto?" name="image" aria-label="Qual a URl da foto?" />
        </div>
        <div>
          <input required placeholder="Qual a URL da comunidade?" name="group" aria-label="Qual a URL da comunidade?" />
        </div>
        <button type="submit">Criar comunidade</button>
      </form>
    </>
  )
}

export default FormCommunity