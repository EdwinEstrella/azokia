import { prisma, withRetry } from './prisma'
import { pgQuery } from './postgres-fallback'
import { CreateUserData, UpdateUserData, CreateProfileData, UpdateProfileData } from '../types/database'

// User CRUD operations
export const userHelpers = {
  // Create user
  createUser: async (data: CreateUserData) => {
    return withRetry(async () => {
      return await prisma.user.create({
        data,
      })
    })
  },

  // Get user by ID
  getUser: async (id: string) => {
    return withRetry(async () => {
      return await prisma.user.findUnique({
        where: { id },
        include: { profile: true },
      })
    })
  },

  // Get user by email
  getUserByEmail: async (email: string) => {
    return withRetry(async () => {
      return await prisma.user.findUnique({
        where: { email },
        include: { profile: true },
      })
    })
  },

  // Update user
  updateUser: async (id: string, data: UpdateUserData) => {
    return withRetry(async () => {
      return await prisma.user.update({
        where: { id },
        data,
      })
    })
  },

  // Delete user
  deleteUser: async (id: string) => {
    return withRetry(async () => {
      return await prisma.user.delete({
        where: { id },
      })
    })
  },

  // List all users
  listUsers: async () => {
    return withRetry(async () => {
      return await prisma.user.findMany({
        include: { profile: true },
        orderBy: { createdAt: 'desc' },
      })
    })
  }
}

// Profile CRUD operations
export const profileHelpers = {
  // Create profile
  createProfile: async (data: CreateProfileData) => {
    return withRetry(async () => {
      return await prisma.profile.create({
        data,
      })
    })
  },

  // Get profile by user ID
  getProfile: async (userId: string) => {
    return withRetry(async () => {
      return await prisma.profile.findUnique({
        where: { userId },
      })
    })
  },

  // Update profile
  updateProfile: async (userId: string, data: UpdateProfileData) => {
    return withRetry(async () => {
      return await prisma.profile.update({
        where: { userId },
        data,
      })
    })
  },

  // Delete profile
  deleteProfile: async (userId: string) => {
    return withRetry(async () => {
      return await prisma.profile.delete({
        where: { userId },
      })
    })
  }
}

// Fallback operations using node-postgres
export const fallbackHelpers = {
  // Fallback user creation
  createUserFallback: async (data: CreateUserData) => {
    const result = await pgQuery(
      'INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *',
      [data.email, data.name]
    )
    return result.rows[0]
  },

  // Fallback get user
  getUserFallback: async (id: string) => {
    const result = await pgQuery(
      'SELECT * FROM users WHERE id = $1',
      [id]
    )
    return result.rows[0]
  }
}
