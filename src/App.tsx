//libraries
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

//components
import { Layout, SuspensePage } from "components/common";

//pages
const AuthPage = lazy(() => import("pages/AuthPage"));
const FormPage = lazy(() => import("pages/FormPage"));


const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<SuspensePage loginProtect children={<AuthPage />} />} />
      <Route path="/form" element={<SuspensePage protect  children={<FormPage />} />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  )
}

export default App