import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export const useSupabase = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  // Clients
  const getClients = async () => {
    if (!user) return [];
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching clients:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const createClient = async (clientData: any) => {
    if (!user) return null;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('clients')
        .insert([{ ...clientData, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating client:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Websites
  const getWebsites = async () => {
    if (!user) return [];
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('websites')
        .select(`
          *,
          clients (*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching websites:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const createWebsite = async (websiteData: any) => {
    if (!user) return null;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('websites')
        .insert([{ ...websiteData, user_id: user.id }])
        .select(`
          *,
          clients (*)
        `)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating website:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Contracts
  const getContracts = async () => {
    if (!user) return [];
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contracts')
        .select(`
          *,
          clients (*),
          websites (*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching contracts:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const createContract = async (contractData: any) => {
    if (!user) return null;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contracts')
        .insert([{ ...contractData, user_id: user.id }])
        .select(`
          *,
          clients (*),
          websites (*)
        `)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating contract:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getClients,
    createClient,
    getWebsites,
    createWebsite,
    getContracts,
    createContract,
  };
};
