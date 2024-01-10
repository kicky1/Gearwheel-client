import { User } from './user.types'

export type LoginInput = {
  username: string
  password: string
}

export type RegisterInput = {
  username: string
  email: string
  password1: string
  password2: string
}

export type AuthorizationStoreState = {
  user: User
  authorized: boolean
  setUser: (user: User) => void
  setAuthorized: (flag: boolean) => void
  logoutUser: () => void
}
