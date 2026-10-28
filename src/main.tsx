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

const app = (
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
  </React.StrictMode>
)

const rootEl = document.getElementById('root')!

if (rootEl.hasChildNodes()) {
  // Build de produção: o HTML já chega pré-renderizado (scripts/prerender.mjs).
  // hydrateRoot reaproveita esse DOM em vez de descartar e remontar do zero.
  ReactDOM.hydrateRoot(rootEl, app)
} else {
  // `vite dev` ou qualquer build sem a etapa de pré-renderização: root vazio.
  ReactDOM.createRoot(rootEl).render(app)
}
