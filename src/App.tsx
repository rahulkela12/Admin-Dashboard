import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const Dashboard = lazy(()=>import('./pages/Dashboard'));
const Products = lazy(()=>import('./pages/Products'));
const Customers = lazy(()=>import('./pages/Customers')) ;
const Transaction = lazy(()=>import('./pages/Transaction'));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/admin/Dashboard' element={<Dashboard/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/admin/customers' element={<Customers/>}/>
        <Route path='/admin/transaction' element={<Transaction/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
