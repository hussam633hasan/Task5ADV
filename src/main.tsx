import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './pages/Sign In/SignIn'
import SignUp from './pages/Sign Up/SignUp'
import DashBoard from './pages/DashBoard/DashBoard'
import AddItem from './pages/AddItem/AddItem'
import ShowItem from './pages/showItem/ShowItem'
import UpdateItem from './pages/UpdateItem/UpdateItem'



const routes = createBrowserRouter([
  {
    path:"/SignIn",
    element:<SignIn/>
  },
  {
    path:"/SignUp",
    element:<SignUp/>
  },
  {
    path:"/",
    element:<DashBoard/>
  },
  {
    path:"/add",
    element:<AddItem/>
  },
  {
    path:"/showitem/:id",
    element:<ShowItem/>
  },
  {
    path:"/updateItem/:id",
    element:<UpdateItem/>
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
