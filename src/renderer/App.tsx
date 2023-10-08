import { FC, useContext, useEffect } from "react";
import "./index.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./pages/layout";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ReportsPage from "./pages/reports";
import ReportPage from "./pages/report";
import { AuthContext } from "./data/context";

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

const App: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        element={
          // <RequireAuth>
          //   <Layout />
          // </RequireAuth>
          <Layout />
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/reports" element={<ReportsPage />}></Route>
        <Route path="/new" element={<ReportPage />} />
      </Route>
    </Routes>
  );
};

export default App;
