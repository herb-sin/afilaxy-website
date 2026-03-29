import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profissionais from './pages/Profissionais'
import ConsultaCRM from './pages/ConsultaCRM'
import Success from './pages/Success'
import Privacidade from './pages/Privacidade'

import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/profissionais/crm" element={<ConsultaCRM />} />
          <Route path="/success" element={<Success />} />
          <Route path="/privacidade" element={<Privacidade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
