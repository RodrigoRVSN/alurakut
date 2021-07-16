import React, { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [githubUser, setGithubUser] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState('')
  const [following, setFollowing] = useState([])
  const [follower, setFollower] = useState([])

  useEffect(() => {
    function verifyInfo() {
      if (isAuth) {
        async function getInfo() {
          await api.get(`/${githubUser}`).then((response) => {
            setUser(response.data)
          })

          await api.get(`/${githubUser}/following`).then((response) => {
            setFollowing(response.data)
          })

          await api.get(`/${githubUser}/followers`).then((response) => {
            setFollower(response.data)
          })
        }
        getInfo()
      }
    }
    verifyInfo()
  }, [githubUser, isAuth])

  return (
    <UserContext.Provider
      value={{
        user,
        githubUser,
        setGithubUser,
        setIsAuth,
        following,
        follower,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
