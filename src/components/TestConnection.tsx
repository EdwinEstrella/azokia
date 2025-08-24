import React, { useState } from 'react'
import { testConnection } from '../lib/prisma'
import { testPgConnection } from '../lib/postgres-fallback'

export const TestConnection: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<{
    prisma: boolean | null
    postgres: boolean | null
  }>({ prisma: null, postgres: null })

  const testConnections = async () => {
    setLoading(true)
    try {
      const prismaResult = await testConnection()
      const pgResult = await testPgConnection()
      
      setResults({
        prisma: prismaResult,
        postgres: pgResult
      })
    } catch (error) {
      console.error('Test failed:', error)
      setResults({
        prisma: false,
        postgres: false
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Test Database Connection</h2>
      
      <button
        onClick={testConnections}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Connections'}
      </button>

      <div className="mt-4 space-y-2">
        <div className="flex items-center">
          <span className="w-32 font-medium">Prisma:</span>
          {results.prisma === null ? (
            <span className="text-gray-500">Not tested</span>
          ) : results.prisma ? (
            <span className="text-green-600">✅ Connected</span>
          ) : (
            <span className="text-red-600">❌ Disconnected</span>
          )}
        </div>

        <div className="flex items-center">
          <span className="w-32 font-medium">PostgreSQL:</span>
          {results.postgres === null ? (
            <span className="text-gray-500">Not tested</span>
          ) : results.postgres ? (
            <span className="text-green-600">✅ Connected</span>
          ) : (
            <span className="text-red-600">❌ Disconnected</span>
          )}
        </div>
      </div>

      {results.prisma === false && (
        <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-yellow-800 text-sm">
            Prisma connection failed. The system will attempt to use the PostgreSQL fallback.
          </p>
        </div>
      )}
    </div>
  )
}
