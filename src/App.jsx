import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import DashboardCard07 from './partials/dashboard/DashboardCard07';
import DashboardCard06 from './partials/dashboard/DashboardCard06';
import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import CustomerList from './partials/dashboard/custmorelist';
import Subadmin from './partials/dashboard/subadmin';
import Createnewadmin from './partials/createnewadmin';
import Advancepayment from './partials/dashboard/advancepayment/addpayment';
import GooglemeetHistory from './partials/dashboard/MeetHistoryTable/googlemeethistory';
import Creategooglemeet from './partials/dashboard/creategooglemeet/creategooglemeet';
import Categories from './partials/dashboard/Category/Categories';
import ProductListing from './partials/dashboard/ProductListing/ProductListing';
import ProductForm from './partials/dashboard/ProductForm';
 

function App() {

  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="px-4 py-4">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/listing" element={<DashboardCard07 />} /> 
              <Route exact path="/customer" element={<CustomerList />} />
              <Route exact path="/createnewadmin" element={<Createnewadmin />} />
              <Route exact path="/advancepayment" element={<Advancepayment />} />
              <Route exact path="/googlemeetHistory" element={<GooglemeetHistory />} />
              <Route exact path="/newgooglemeet" element={<Creategooglemeet />} /> 
              <Route exact path="/categories" element={<Categories />} /> 
              <Route exact path="/productlisting" element={<ProductListing />} /> 
              <Route exact path="/stonetype" element={<ProductForm />} /> 
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
