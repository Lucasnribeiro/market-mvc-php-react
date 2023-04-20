import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthRoute from "./components/AuthRoute"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Users from "./pages/Users"
import { QueryClientProvider, QueryClient } from 'react-query'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./pages/Register"
import Shop from "./pages/Shop"
import Products from "./pages/Products"
import Orders from "./pages/Orders"


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <header>

        </header>

        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<AuthRoute><Shop /></AuthRoute>} />
            <Route path="/orders" element={<AuthRoute><Orders/></AuthRoute>} />
            <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
            <Route path="/users" element={<AuthRoute><Users /></AuthRoute>} />
            <Route path="/products" element={<AuthRoute><Products/></AuthRoute>} />
          </Routes>
        </main>

        <footer>

        </footer>
        <ToastContainer />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
