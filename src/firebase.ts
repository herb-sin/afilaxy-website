import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
})

// App Check (reCAPTCHA v3) desativado: o reCAPTCHA passou a dar timeout e, como o Auth
// espera o token antes de cada requisição, derrubava o formulário de leads. O Firestore
// não exige App Check hoje, então ele não protegia nada. Reativar junto com a Cloud
// Function de leads, de forma que uma falha do reCAPTCHA não bloqueie o envio.

export const auth = getAuth(app)
export const db = getFirestore(app)
const functions = getFunctions(app)

export async function ensureAuth() {
  if (!auth.currentUser) await signInAnonymously(auth)
}

// Grava pela Cloud Function submitLead (validação, limite por IP e aviso por e-mail no
// servidor) — sem login anônimo e sem escrita direta do navegador na coleção 'leads'.
const submitLead = httpsCallable<
  { name: string; email: string; phone?: string; crm?: string; cnpj?: string; plan: string; type: 'medico' | 'clinica'; segment?: string },
  { ok: boolean }
>(functions, 'submitLead')

export async function saveLead(data: { name: string; email: string; phone?: string; crm?: string; cnpj?: string; plan: string; type: 'medico' | 'clinica'; segment?: string }) {
  return submitLead(data)
}

export const validateCrm = httpsCallable<
  { crm: string; uf: string },
  { found: boolean; name?: string; specialty?: string; situation?: string; uf?: string; crm?: string }
>(functions, 'validateCrm')

export const createCheckoutSession = httpsCallable<
  { priceId: string; email: string; metadata: { name: string; crm: string; planType: string } },
  { sessionId: string }
>(functions, 'createCheckoutSession')
