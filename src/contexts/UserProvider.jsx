import React, { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState('')
  const [following, setFollowing] = useState([])
  const [follower, setFollower] = useState([])

  useEffect(() => {
    async function getUserInfo() {
      await api.get(`/rodrigorvsn`).then((response) => {
        setUser(response.data)
      })
    }
    getUserInfo()

    async function getFollowingInfo() {
      await api.get(`/rodrigorvsn/following`).then((response) => {
        setFollowing(response.data)
      })
    }
    getFollowingInfo()

    async function getFollowersInfo() {
      await api.get(`/rodrigorvsn/followers`).then((response) => {
        setFollower(response.data)
      })
    }
    getFollowersInfo()
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        following,
        follower,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
