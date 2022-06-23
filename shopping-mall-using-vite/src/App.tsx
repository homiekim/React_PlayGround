import React from "react";
import { QueryClientProvider } from "react-query";
import { useRoutes } from "react-router-dom";
import { getQueryCient } from "./queryClient";
import { ReactQueryDevtools } from 'react-query/devtools'
import { routes } from "./routes";
import GNB from './components/gnb';

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getQueryCient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GNB />
        {elem}
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </div>
  );
};

export default App;
