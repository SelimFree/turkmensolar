import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App companyName="Turkmen Solar" country="Turkmenistan" languages={[{ code: "ru", label: "Русский"}, { code: "en", label: "English" }]}/>
  </StrictMode>,
)
