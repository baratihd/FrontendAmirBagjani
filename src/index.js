import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

//components
import { UserProvider } from "context";
import App from "./App";

import "./styles/global.scss"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    }
  }
});


const Providers = ({ children }) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            {children}
          </UserProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<Providers><App /></Providers>);
