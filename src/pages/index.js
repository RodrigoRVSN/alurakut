import React from 'react'
import { Box } from '../components/Box'
import { MainGrid } from '../components/MainGrid'
import ProfileSideBar from '../components/ProfileSideBar'
import { ProfileRelationsWrap } from '../components/ProfileRelationsWrap'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'

export default function Home() {
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser="rodrigorvsn" />
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
          <ProfileRelationsWrap >
            <h2 className='smallTitle'>Seguindo</h2>
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </ProfileRelationsWrap>

        </div>

      </MainGrid>
    </>

  )
}
