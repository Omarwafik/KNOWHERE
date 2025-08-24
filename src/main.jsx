import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Styles/Variables.css';
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'



const client_ID ="405081202926-qv8tajapniu7ktc7vhdekpg6iimgufbi.apps.googleusercontent.com"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={client_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
