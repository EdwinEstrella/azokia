import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: any | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);

  const signIn = async (email: string, password: string) => {
    // Dummy sign-in logic
    if (email === 'test@example.com' && password === 'password') {
      setUser({ id: '123', email: 'test@example.com' });
      console.log('Dummy sign-in successful');
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signOut = async () => {
    setUser(null);
    console.log('Dummy sign-out successful');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
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