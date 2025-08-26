import { useState, useCallback } from 'react';
import { DatabaseService } from '../services/databaseService';
import { Database } from '../types/supabase';

type Client = Database['public']['Tables']['clients']['Row'];
type Contract = Database['public']['Tables']['contracts']['Row'];
type Invoice = Database['public']['Tables']['invoices']['Row'];
type Project = Database['public']['Tables']['projects']['Row'];
type CreateClientData = Database['public']['Tables']['clients']['Insert'];
type CreateContractData = Database['public']['Tables']['contracts']['Insert'];
type CreateInvoiceData = Database['public']['Tables']['invoices']['Insert'];
type CreateProjectData = Database['public']['Tables']['projects']['Insert'];


export const useDatabase = (userId: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((err: unknown) => {
    const message = err instanceof Error ? err.message : 'Error desconocido';
    setError(message);
    throw err;
  }, []);

  // Client operations
  const createClient = useCallback(async (data: CreateClientData): Promise<Client> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.create('clients', { ...data, user_id: userId });
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  const getClients = useCallback(async (): Promise<Client[]> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.getAll('clients', userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  const getClientById = useCallback(async (clientId: string): Promise<Client | null> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.getById('clients', clientId, userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  // const updateClient = useCallback(async (clientId: string, data: UpdateClientData): Promise<Client> => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     return await DatabaseService.update('clients', clientId, data, userId);
  //   } catch (err) {
  //     return handleError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [userId, handleError]);

  const deleteClient = useCallback(async (clientId: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      await DatabaseService.delete('clients', clientId, userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  // Project operations
  const createProject = useCallback(async (data: CreateProjectData): Promise<Project> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.create('projects', { ...data, user_id: userId });
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  const getProjects = useCallback(async (): Promise<Project[]> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.getAll('projects', userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  const getProjectById = useCallback(async (projectId: string): Promise<Project | null> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.getById('projects', projectId, userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  // const updateProject = useCallback(async (projectId: string, data: UpdateProjectData): Promise<Project> => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     return await DatabaseService.update('projects', projectId, data, userId);
  //   } catch (err) {
  //     return handleError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [userId, handleError]);

  const deleteProject = useCallback(async (projectId: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      await DatabaseService.delete('projects', projectId, userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  // Contract operations
  const createContract = useCallback(async (data: CreateContractData): Promise<Contract> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.create('contracts', { ...data, user_id: userId });
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  const getContracts = useCallback(async (): Promise<Contract[]> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.getAll('contracts', userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  // Invoice operations
  const createInvoice = useCallback(async (data: CreateInvoiceData): Promise<Invoice> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.create('invoices', { ...data, user_id: userId });
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  const getPendingInvoices = useCallback(async (): Promise<Invoice[]> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.getPendingInvoices(userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  // Search operations
  const searchClients = useCallback(async (query: string): Promise<Client[]> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.searchClients(query, userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  return {
    loading,
    error,
    clearError: () => setError(null),
    
    // Client methods
    createClient,
    getClients,
    getClientById,
    deleteClient,

    // Project methods
    createProject,
    getProjects,
    getProjectById,
    deleteProject,
    
    // Contract methods
    createContract,
    getContracts,
    
    // Invoice methods
    createInvoice,
    getPendingInvoices,
    
    // Search methods
    searchClients
  };
};
