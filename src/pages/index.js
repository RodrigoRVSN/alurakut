import React from 'react'
import { Box } from '../components/Box'
import { MainGrid } from '../components/MainGrid'
import ProfileSideBar from '../components/ProfileSideBar'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import FollowingWrap from '../components/Following'

export default function Home() {
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
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <FollowingWrap />
        </div>

      </MainGrid>
    </>

  )
}
