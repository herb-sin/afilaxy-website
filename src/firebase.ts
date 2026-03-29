import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
})

export const auth = getAuth(app)
export const db = getFirestore(app)
const functions = getFunctions(app)

export async function ensureAuth() {
  if (!auth.currentUser) await signInAnonymously(auth)
}

export async function saveLead(data: { name: string; email: string; phone?: string; crm?: string; cnpj?: string; plan: string; type: 'medico' | 'clinica'; segment?: string }) {
  await ensureAuth()
  return addDoc(collection(db, 'leads'), {
    ...data,
    createdAt: serverTimestamp(),
  })
}

export const validateCrm = httpsCallable<
  { crm: string; uf: string },
  { found: boolean; name?: string; specialty?: string; situation?: string; uf?: string; crm?: string }
>(functions, 'validateCrm')

export const createCheckoutSession = httpsCallable<
  { priceId: string; email: string; metadata: { name: string; crm: string; planType: string } },
  { sessionId: string }
>(functions, 'createCheckoutSession')
