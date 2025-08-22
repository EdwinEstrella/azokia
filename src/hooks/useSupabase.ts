import { useState, useCallback } from 'react'
import { SupabaseService } from '../services/supabaseService'
import { 
  CreateClientData, 
  CreateProductData, 
  CreateContractData, 
  CreatePaymentData 
} from '../services/supabaseService'

export const useSupabase = (userId: string) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleError = useCallback((err: unknown) => {
    const message = err instanceof Error ? err.message : 'Error desconocido'
    setError(message)
    throw err
  }, [])

  // Client operations
  const createClient = useCallback(async (data: CreateClientData) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.createClient(userId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getClients = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.getClients(userId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getClientById = useCallback(async (clientId: string) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.getClientById(userId, clientId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const updateClient = useCallback(async (clientId: string, data: Partial<CreateClientData>) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.updateClient(userId, clientId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const deleteClient = useCallback(async (clientId: string) => {
    setLoading(true)
    setError(null)
    try {
      await SupabaseService.deleteClient(userId, clientId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  // Product operations
  const createProduct = useCallback(async (data: CreateProductData) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.createProduct(userId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.getProducts(userId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const updateProduct = useCallback(async (productId: string, data: Partial<CreateProductData>) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.updateProduct(userId, productId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const deleteProduct = useCallback(async (productId: string) => {
    setLoading(true)
    setError(null)
    try {
      await SupabaseService.deleteProduct(userId, productId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  // Contract operations
  const createContract = useCallback(async (data: CreateContractData) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.createContract(userId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getContracts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.getContracts(userId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  // Payment operations
  const createPayment = useCallback(async (data: CreatePaymentData) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.createPayment(userId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getPendingPayments = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.getPendingPayments(userId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  // Search operations
  const searchClients = useCallback(async (query: string) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.searchClients(userId, query)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  // Auth operations
  const signUp = useCallback(async (email: string, password: string, name: string) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.signUp(email, password, name)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [handleError])

  const signIn = useCallback(async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.signIn(email, password)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [handleError])

  const signOut = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      await SupabaseService.signOut()
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [handleError])

  const getCurrentUser = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      return await SupabaseService.getCurrentUser()
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [handleError])

  return {
    loading,
    error,
    clearError: () => setError(null),
    
    // Client methods
    createClient,
    getClients,
    getClientById,
    updateClient,
    deleteClient,
    
    // Product methods
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    
    // Contract methods
    createContract,
    getContracts,
    
    // Payment methods
    createPayment,
    getPendingPayments,
    
    // Search methods
    searchClients,
    
    // Auth methods
    signUp,
    signIn,
    signOut,
    getCurrentUser
  }
}
