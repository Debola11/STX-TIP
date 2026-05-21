import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Connect } from '@stacks/connect-react';
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/AuthContext'
import App from './App';
import './index.css';

// Configure Connect 