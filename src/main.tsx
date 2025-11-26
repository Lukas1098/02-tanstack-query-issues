import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { TanstackQueryProvider } from './lib/tanstack-query-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { router } from './router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanstackQueryProvider>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </TanstackQueryProvider>
  </React.StrictMode>
);
