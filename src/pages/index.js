import React, { useState } from 'react'
import { Box } from '../components/Box'
import { MainGrid } from '../components/MainGrid'
import ProfileSideBar from '../components/ProfileSideBar'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import FriendsWrap from '../components/FriendsWrap'
import CommunityWrap from '../components/CommunityWrap'
import useUser from '../hooks/useUser'
import FormCommunity from '../components/FormCommunity'

export default function Home() {
  const { user, follower, following } = useUser();

  const [communitys, setCommunitys] = useState([
    {
      id: '1616516565165165',
      title: 'Eu amo acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
      group: ''
    },]);

  return (
    <>
      <AlurakutMenu githubUser={user.login} />
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
            <FormCommunity setCommunitys={setCommunitys} communitys={communitys} />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <CommunityWrap communitys={communitys} />
          <FriendsWrap title="Seguindo" items={following} />
          <FriendsWrap title="Seguidores" items={follower} />
        </div>

      </MainGrid>
    </>

  )
}
