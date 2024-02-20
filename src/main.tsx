import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes/Routes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/Store.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router}></RouterProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
