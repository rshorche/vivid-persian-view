console.log('Loading main.jsx successfully');
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('About to render App');
createRoot(document.getElementById("root")).render(<App />);