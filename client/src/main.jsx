import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import App from "./components/routes/App.jsx";
import Home from "./components/pages/Home.jsx";
import Signup from "./components/pages/Signup.jsx";
import UserDashboard from "./Dashboard/dashboard.jsx";
import FreshFormFillup from './components/pages/FreshFormFillup.jsx';

// Define user data
const user = {
  name: '',
  email: '',
  userName: '',
  phone: ''
};

// Create routes with user data
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/dashboard" element={<UserDashboard user={user} />} />
      <Route path="/fresh-form" element={<FreshFormFillup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
