import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';
//import from react Tanstack
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient() //use from react Tanstack

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        {/* cover the main router using  QueryClientProvider=
              cover korar karon react tanstack je subida gulo disse seigulo ami webside er jekono page theke access korte parbo
        */}
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
