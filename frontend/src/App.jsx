// App.jsx
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword";
import EmailVerification from "./Pages/EmailVerification";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import ResetPasswordConfirm from "./Pages/ResetPasswordConfirm";
import Signup from "./Pages/Signup";
import Layout from "./High Order Function/Layout";
import { Provider } from "react-redux";
import Store from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard/Dashboard";
import VisitsList from "./Visits/VisitsList";
import EmployeesList from "./Employees/EmployeeList";
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="login/" element={<Login />} />
            <Route path="signup/" element={<Signup />} />
            <Route path="change/password/" element={<ChangePassword />} />
            <Route path="reset/password/" element={<ResetPassword />} />
            <Route
              path="dj-rest-auth/registration/account-confirm-email/:key/"
              element={<EmailVerification />}
            />
            <Route
              path="reset/password/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/visits" element={<VisitsList />} />
            <Route path="/employees" element={<EmployeesList />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
