import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Feed } from './pages/feed';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Cadastro } from './pages/cadastro';
import { AuthProvider, PrivateRoute } from './context/auth';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/feed" element={<PrivateRoute><Feed /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
