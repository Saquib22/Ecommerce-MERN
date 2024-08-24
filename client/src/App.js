import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import  Register  from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './User/Dashboard';
import PrivateRoute from './Components/Routes/Private';
import ForgotPassword from './pages/auth/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from './Components/Routes/AdminRoute';
import CreateCatagory from './pages/Admin/CreateCatagory';
import CreateProduct from './pages/Admin/CreateProduct';
import User from './pages/Admin/User';
import Order from './User/Order';
import Profile from './User/Profile';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="admin/orders" element={<Order />} />
          <Route path='user/create-profile' element={<Profile/>}/>
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-catagory" element={<CreateCatagory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/create-users" element={<User />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
