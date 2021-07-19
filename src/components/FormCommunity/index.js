function FormCommunity(props) {

  function handleSubmitCommunity(e) {
    e.preventDefault()
    const dataForm = new FormData(e.target);
    const community = {
      title: dataForm.get('title'),
      imageUrl: dataForm.get('image'),
      group: dataForm.get('group'),
      creatorSlug: 'RodrigoRVSN'
    }

    fetch('/api/communitys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(community)
    }).then(async (res) => {
      const data = await res.json()
      const community = data.registerCreated
      props.setCommunitys([...props.communitys, community])
    })

  }

  return (
    <>
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
