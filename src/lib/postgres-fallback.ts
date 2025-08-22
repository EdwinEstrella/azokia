import { Pool } from 'pg'

// Fallback PostgreSQL connection using node-postgres
export const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Helper functions for fallback operations
export const testPgConnection = async (): Promise<boolean> => {
  try {
    const client = await pgPool.connect()
    await client.query('SELECT 1')
    client.release()
    console.log('✅ PostgreSQL fallback connection successful')
    return true
  } catch (error) {
    console.error('❌ PostgreSQL fallback connection failed:', error)
    return false
  }
}

// Basic CRUD operations for fallback
export const pgQuery = async (text: string, params?: any[]) => {
  const client = await pgPool.connect()
  try {
    const result = await client.query(text, params)
    return result
  } finally {
    client.release()
  }
}
