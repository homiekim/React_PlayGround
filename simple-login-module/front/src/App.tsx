import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { QueryClient, QueryClientProvider } from "react-query";
import style from "./style/App.module.css";
import logo from "./asset/logo.png";

const App = () => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.imgSection}>
            <img className={style.logo} src={logo} alt="logo" />
          </div>
          <div className={style.formSection}>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
