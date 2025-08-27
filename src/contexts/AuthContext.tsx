import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for an existing session
    const session = localStorage.getItem('user_session');
    if (session) {
      setUser(JSON.parse(session));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    // Dummy sign-in logic
    if (email === 'test@example.com' && password === 'password') {
      const userData = { id: '123', email: 'test@example.com' };
      setUser(userData);
      localStorage.setItem('user_session', JSON.stringify(userData));
      console.log('Dummy sign-in successful');
    } else {
      throw new Error('Invalid credentials');
    }
    setLoading(false);
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('user_session');
    console.log('Dummy sign-out successful');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};