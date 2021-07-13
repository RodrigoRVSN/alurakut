import React, { useState } from 'react'
import { Box } from '../components/Box'
import { MainGrid } from '../components/MainGrid'
import ProfileSideBar from '../components/ProfileSideBar'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import FollowingWrap from '../components/FollowingWrap'
import CommunityWrap from '../components/CommunityWrap'

export default function Home() {

  const [communitys, setCommunitys] = useState([
    {
      id: '1616516565165165',
      title: 'Eu amo acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    },]);

  function handleSubmitCommunity(e) {
    e.preventDefault()
    const dataForm = new FormData(e.target);
    const community = {
      id: new Date().toISOString(),
      title: dataForm.get('title'),
      image: dataForm.get('image')
    }
    setCommunitys([...communitys, community])
    console.log('a' + communitys)
    console.log('a' + communitys)
  }

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem-vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>

            <h2 className="subtitle">O que você deseja falar?</h2>
            <form onSubmit={e => handleSubmitCommunity(e)}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?" name="title" aria-label="Qual vai ser o nome da sua comunidade?" type="text" />
              </div>
              <div>
                <input placeholder="Qual a URl da foto?" name="image" aria-label="Qual a URl da foto?" />
              </div>
              <button type="submit">Criar comunidade</button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>

          <CommunityWrap communitys={communitys} />
          <FollowingWrap />
        </div>

      </MainGrid>
    </>

  )
}
