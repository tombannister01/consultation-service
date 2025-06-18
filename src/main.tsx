import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QuestionProvider } from './context/QuestionContext/QuestionContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuestionProvider>
      <App />
    </QuestionProvider>
  </StrictMode>,
)
