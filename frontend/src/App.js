import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import HomeEquity from './pages/services/HomeEquity';
import CapitalGiro from './pages/services/CapitalGiro';
import Finep from './pages/services/Finep';
import BNDES from './pages/services/BNDES';
import Consorcio from './pages/services/Consorcio';
import Cambio from './pages/services/Cambio';
import CapitalInvestimento from './pages/services/CapitalInvestimento';
import Contato from './pages/Contato';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/servicos/home-equity" element={<HomeEquity />} />
            <Route path="/servicos/capital-giro" element={<CapitalGiro />} />
            <Route path="/servicos/finep" element={<Finep />} />
            <Route path="/servicos/bndes" element={<BNDES />} />
            <Route path="/servicos/consorcio" element={<Consorcio />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" richColors />
      </Router>
    </div>
  );
}

export default App;