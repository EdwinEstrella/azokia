import { NextApiRequest, NextApiResponse } from 'next'
import { testConnection } from '../../lib/prisma'
import { testPgConnection } from '../../lib/postgres-fallback'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Test Prisma connection
    const prismaConnected = await testConnection()
    
    // Test fallback connection
    const pgConnected = await testPgConnection()

    res.status(200).json({
      prisma: prismaConnected ? 'connected' : 'disconnected',
      postgres: pgConnected ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Connection test failed:', error)
    res.status(500).json({ 
      error: 'Connection test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
