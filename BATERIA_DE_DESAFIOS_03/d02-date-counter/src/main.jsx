import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.jsx'
import './date-counter.css'

const rootElement = document.querySelector('[data-js="root"]')
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
    ,)
