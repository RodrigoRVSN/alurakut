import React, { useEffect, useState } from 'react'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'

import { Box } from '../components/Box'
import { MainGrid } from '../components/MainGrid'
import ProfileSideBar from '../components/ProfileSideBar'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import FriendsWrap from '../components/FriendsWrap'
import CommunityWrap from '../components/CommunityWrap'
import useUser from '../hooks/useUser'
import FormCommunity from '../components/FormCommunity'
import { getAllCommunities } from '../lib/dato-cms'
import { toast } from 'react-toastify'


export default function Home(props) {

  const { user, setGithubUser, setIsAuth, follower, following } = useUser();
  const [communitys, setCommunitys] = useState([]);

  useEffect(() => {
    setGithubUser(props.githubUser)
    setIsAuth(true)
    async function getAll() {
      setCommunitys(await getAllCommunities())
    }
    getAll()
  }, [])

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

export async function getServerSideProps(ctx) {

  const cookies = nookies.get(ctx);
  const token = cookies.USER_TOKEN;

  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
    .then((res) => res.json())

  if (!isAuthenticated) {

    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  
  return {
    props: {
      githubUser
    }
  }
}
