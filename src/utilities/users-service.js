import * as usersAPI from './users-api'

export async function signUp (userData) {
  // Delete the network request code to the
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signUp(userData)
  // Persist the token to localStorage
  window.localStorage.setItem('token', token)
  return getUser()
}

export async function login (credentials) {
  const token = await usersAPI.login(credentials)
  // Persist the token to window.localStorage
  window.localStorage.setItem('token', token)
  return getUser()
}

export function getToken () {
  // original
  const token = window.localStorage.getItem('token')

  // REMOVING WINDOW
  // const token = localStorage.getItem('token')

  // getItem will return null if no key
  if (!token) return null

  // original
  const payload = JSON.parse(window.atob(token.split('.')[1]))

  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    window.localStorage.removeItem('token')
    return null
  }
  return token
}

export function getUser () {
  const token = getToken()
  return token ? JSON.parse(window.atob(token.split('.')[1])).user : null
}

export function logOut () {
  window.localStorage.removeItem('token')
}

// ADD WINDOW
// const payload = JSON.parse(window.atob(token.split('.')[1]))

// //WITH JUST DECODE URI - adding and removing window in this line
// const payload = JSON.parse(window.atob(decodeURIComponent(token.split('.')[1])))

// USING BTOA --split second
// const encodedToken = JSON.parse(btoa(token))
// const payload = JSON.parse(atob(encodedToken.split('.')[1]))

// USING BTOA -- split first
// const encodedToken = JSON.parse(btoa(token.split('.')[1]))
// const payload = JSON.parse(atob(encodedToken))

// USING BTOA -- ADD WINDOW -split second
// const encodedToken = JSON.parse(window.btoa(token))
// const payload = JSON.parse(window.atob(encodedToken.split('.')[1]))

// USING BTOA -- ADD WINDOW -- split first
// const encodedToken = JSON.parse(window.btoa(token.split('.')[1]))
// const payload = JSON.parse(window.atob(encodedToken))

// //USING encodeURIComponent - split first
// const encodedToken = JSON.parse(window.btoa(encodeURIComponent(token.split('.')[1])))
// const payload = JSON.parse(window.atob(decodeURIComponent(encodedToken)))

//  // //USING encodeURIComponent - split second
// const encodedToken = JSON.parse(window.btoa(encodeURIComponent(token)))
// const payload = JSON.parse(window.atob(decodeURIComponent(encodedToken.split('.')[1])))
