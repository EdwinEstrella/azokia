import { User, Profile } from '@prisma/client'

export type { User, Profile }

export interface CreateUserData {
  email: string
  name: string
}

export interface UpdateUserData {
  email?: string
  name?: string
}

export interface CreateProfileData {
  userId: string
  bio?: string
  avatarUrl?: string
}

export interface UpdateProfileData {
  bio?: string
  avatarUrl?: string
}

export interface DatabaseError {
  code: string
  message: string
  detail?: string
}
