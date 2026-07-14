import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profissionais from './pages/Profissionais'
import Success from './pages/Success'
import Privacidade from './pages/Privacidade'
import TermosDeUso from './pages/TermosDeUso'

import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/success" element={<Success />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<TermosDeUso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
