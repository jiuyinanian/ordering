import Home from "../components/Home"
import category from "../components/category"
import Shop from "../components/Shop"
import Admin from "../components/Admin"

import Login from '../components/admin/Login';
import Register from '../components/admin/Register';

export default [{
  path: '/',
  name: 'homeLink',
  component: Home
}, {
  path: "/category",
  name: "categoryLink",
  component: category
}, {
  path: "/shop",
  name: "shopLink",
  component: Shop
}, {
  path: "/admin",
  component: Admin,
  name: "adminLink",
  redirect: "/admin/login",
  children: [{
      path: "/admin/login",
      name: "loginLink",
      component: Login,
    },
    {
      path: "/admin/register",
      name: "registerLink",
      component: Register
    }
  ]
}]
