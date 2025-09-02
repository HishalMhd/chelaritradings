
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Doors from './pages/Doors'
import Gallery from './pages/Gallery'
import Glass from './pages/Glass'
import Hardware from './pages/Hardware'
import Home from './pages/Home'
import KitchenFittings from './pages/KitchenFittings'
import Plywood from './pages/Plywood'
import 'animate.css'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './components/AdminLogin'
import AdminControl from './components/AdminControl'
import Carousal from './components/Carousal'
import AdminRegister from './components/AdminRegister'
import { ToastContainer } from 'react-toastify'
import ProductCard from './components/ProductCard'
import AdminDoors from './adminpages/AdminDoors'
import AdminGlass from './adminpages/AdminGlass'
import AdminHardware from './adminpages/AdminHardware'
import AdminPlywood from './adminpages/AdminPlywood'
import AdminKitchenFittings from './adminpages/AdminKitchenFittings'
import ProductDetails from './components/ProductDetails'
import OurProductCard from './components/OurProductCard'
import ScrollToTop from "./components/ScrollToTop";










function App() {
  

  return (
    <>
    
    <ToastContainer position="top-right" autoClose={4000} theme="colored"  />
    <ScrollToTop />  {/* Works now */}
    

     <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/aboutUs'} element={<AboutUs/>}/>
      <Route path={'/contactUs'} element={<ContactUs/>}/>
      <Route path={'/doors'} element={<Doors/>}/>
      <Route path={'/gallery'} element={<Gallery/>}/>
      <Route path={'/glass'} element={<Glass/>}/>
      <Route path={'/hardware'} element={<Hardware/>}/>
      <Route path={'/kitchenfittings'} element={<KitchenFittings/>}/>
      <Route path={'/plywood'} element={<Plywood/>}/>
      <Route path={'/admin'} element={<AdminDashboard/>}/>
      <Route path={'/admin/login'} element={<AdminLogin/>}/>
      <Route path={'/admin/admincontrol'} element={<AdminControl/>}/>
      <Route path={'/admin/admincontrol/carousal'} element={<Carousal/>}/>
      <Route path={'/admin/registerofadminchelaritradings'} element={<AdminRegister/>}/>
      <Route path={'/admin/admincontrol/admindoors'} element={<AdminDoors/>}/>
      <Route path={'/admin/admincontrol/adminglass'} element={<AdminGlass/>}/>
      <Route path={'/admin/admincontrol/adminhardware'} element={<AdminHardware/>}/>
      <Route path={'/admin/admincontrol/adminplywood'} element={<AdminPlywood/>}/>
      <Route path={'/admin/admincontrol/adminkitchenfittings'} element={<AdminKitchenFittings/>}/>
      <Route path={'/productdetails/:id'} element={<ProductDetails />} /> 
      <Route path={'/ourproducts'} element={<OurProductCard />} /> 


      

      


      
      
     </Routes>
     
    </>
  )
}

export default App
