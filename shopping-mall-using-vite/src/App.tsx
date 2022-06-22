import React from "react";
import { QueryClientProvider } from "react-query";
import { useRoutes } from "react-router-dom";
import { getQueryCient } from "./queryClient";
import { routes } from "./routes";

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getQueryCient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>{elem}</QueryClientProvider>
    </div>
  );
};

export default App;
