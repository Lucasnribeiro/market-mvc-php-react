import axios from 'axios'
import { isEmpty } from 'lodash-es'
import { proxy, useSnapshot } from 'valtio'
import api from '../../axios'

function getAuthToken() {
  const jwt = window.localStorage.getItem('jwtToken')

  if (!jwt) return {}

  return JSON.parse(jwt)
}

function getUser() {
  const user = window.localStorage.getItem('user')

  if (!user) return {}

  return JSON.parse(user)
}


const state = proxy(
  {
    authUser: {},
    authToken: {}
  },
  {
    authToken: getAuthToken,
    user: getUser,
  },
  {
    isAuth: (snap) => !isEmpty(snap.authUser),
  }
)

const actions = {
  login: (user, token) => {
    state.authUser = user
    state.authToken = token

    window.localStorage.setItem('jwtToken', JSON.stringify(state.authToken))
    window.localStorage.setItem('user', JSON.stringify(state.authUser))

    api.defaults.headers.Authorization = `Bearer ${state.authToken}`
  },
  logout: () => {
    state.authUser = {}

    window.localStorage.removeItem('jwtToken')
  },
  checkAuth: () => {
    const authToken = getAuthToken()
    const authUser = getUser()

    if (!authToken || isEmpty(authToken)) {
      actions.logout()
      return false
    }else{
      api.defaults.headers.Authorization = `Bearer ${state.authToken}`
      return authUser
    }
  },
}

function useAuth() {
  const snap = useSnapshot(state)

  return {
    ...snap,
    ...actions,
  }
}

export default useAuth