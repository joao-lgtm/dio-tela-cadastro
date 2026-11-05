import { createContext, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

const STORAGE_KEY = '@dio:user';
const AuthContext = createContext(null);

const readUser = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(readUser);

  const signIn = (userData) => {
    // nunca guardar a senha no navegador
    const { senha, ...safeUser } = userData;
    setUser(safeUser);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser)); } catch {}
  };

  const signOut = () => {
    setUser(null);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Rota que só abre logado
export const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};
