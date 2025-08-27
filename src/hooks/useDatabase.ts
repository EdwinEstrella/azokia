import { useState, useCallback } from 'react';
import { DatabaseService } from '../services/databaseService';
import { Database } from '../types/supabase';
import { Tables, InvoiceWithClientAndItems, ContractWithClient, ProjectWithClient } from '../services/databaseService';

type Client = Tables['clients']['Row'];
type Contract = Tables['contracts']['Row'];
type Invoice = Tables['invoices']['Row'];
type Project = Tables['projects']['Row'];

type CreateClientData = Tables['clients']['Insert'];
type CreateContractData = Tables['contracts']['Insert'];
type CreateInvoiceData = Tables['invoices']['Insert'];
type CreateInvoiceItemData = Tables['invoice_items']['Insert'];
type CreateProjectData = Tables['projects']['Insert'];


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

  const getProjects = useCallback(async (): Promise<ProjectWithClient[]> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.getProjectsWithClientNames(userId);
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

  const getContracts = useCallback(async (): Promise<ContractWithClient[]> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.getContractsWithClientNames(userId);
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

  const getInvoices = useCallback(async (): Promise<InvoiceWithClientAndItems[]> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.getInvoicesWithClientAndItems(userId);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, handleError]);

  

  const createInvoiceItem = useCallback(async (data: CreateInvoiceItemData): Promise<Tables['invoice_items']['Row']> => {
    setLoading(true);
    setError(null);
    try {
      return await DatabaseService.createInvoiceItem(data);
    } catch (err) {
      return handleError(err);
    } finally {
      setLoading(false);
    }
  }, [handleError]);

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
    createInvoiceItem,
    
    // Search methods
    searchClients
  };
};
