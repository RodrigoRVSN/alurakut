import React, { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState('')
  const [following, setFollowing] = useState([])

  useEffect(() => {
    async function getUserInfo() {
      await api.get(`/rodrigorvsn`).then((response) => {
        setUser(response.data)
      })
    }
    getUserInfo()
    async function getFollowingInfo() {
      await api
        .get(`/rodrigorvsn/following`, {
          params: {
            _limit: 6,
          },
        })
        .then((response) => {
          setFollowing(response.data)
        })
    }
    getFollowingInfo()
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        following,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
