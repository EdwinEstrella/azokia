import { useState, useCallback } from 'react'
import { DatabaseService } from '../services/databaseService'
import { 
  Client, 
  Product, 
  Contract, 
  Payment,
  CreateClientData,
  CreateProductData,
  CreateContractData,
  CreatePaymentData,
  UpdateClientData,
  UpdateProductData
} from '../types/database'

export const useDatabase = (userId: string) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleError = useCallback((err: unknown) => {
    const message = err instanceof Error ? err.message : 'Error desconocido'
    setError(message)
    throw err
  }, [])

  // Client operations
  const createClient = useCallback(async (data: CreateClientData): Promise<Client> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.createClient(userId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getClients = useCallback(async (): Promise<Client[]> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.getClients(userId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getClientById = useCallback(async (clientId: string): Promise<Client | null> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.getClientById(userId, clientId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const updateClient = useCallback(async (clientId: string, data: UpdateClientData): Promise<Client> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.updateClient(userId, clientId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const deleteClient = useCallback(async (clientId: string): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      await DatabaseService.deleteClient(userId, clientId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  // Product operations
  const createProduct = useCallback(async (data: CreateProductData): Promise<Product> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.createProduct(userId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getProducts = useCallback(async (): Promise<Product[]> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.getProducts(userId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const updateProduct = useCallback(async (productId: string, data: UpdateProductData): Promise<Product> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.updateProduct(userId, productId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const deleteProduct = useCallback(async (productId: string): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      await DatabaseService.deleteProduct(userId, productId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  // Contract operations
  const createContract = useCallback(async (data: CreateContractData): Promise<Contract> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.createContract(userId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getContracts = useCallback(async (): Promise<Contract[]> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.getContracts(userId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  // Payment operations
  const createPayment = useCallback(async (data: CreatePaymentData): Promise<Payment> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.createPayment(userId, data)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  const getPendingPayments = useCallback(async (): Promise<Payment[]> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.getPendingPayments(userId)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

  // Search operations
  const searchClients = useCallback(async (query: string): Promise<Client[]> => {
    setLoading(true)
    setError(null)
    try {
      return await DatabaseService.searchClients(userId, query)
    } catch (err) {
      return handleError(err)
    } finally {
      setLoading(false)
    }
  }, [userId, handleError])

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
    searchClients
  }
}
