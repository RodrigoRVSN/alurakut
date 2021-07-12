import { useContext } from 'react'
import { UserContext } from '../contexts/UserProvider'

const useUser = () => {
  const value = useContext(UserContext)
  return value
}

export default useUser
