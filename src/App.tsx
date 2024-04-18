import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';



const Dashboard = lazy(()=>import('./pages/Dashboard'));
const Products = lazy(()=>import('./pages/Products'));
const Customers = lazy(()=>import('./pages/Customers')) ;
const Transaction = lazy(()=>import('./pages/Transaction'));
const NewProduct = lazy(()=>import('./pages/management/NewProduct'));
const ProductManagement = lazy(()=>import('./pages/management/ProductManagement'));
const TransactionManagement = lazy(()=>import('./pages/management/TransactionManagement'));
const BarCharts = lazy(()=>import('./pages/charts/BarCharts'));
const PieCharts = lazy(()=>import('./pages/charts/PieCharts'));
const LineCharts = lazy(()=>import('./pages/charts/LineCharts'));
const Stopwatch = lazy(()=>import('./pages/apps/Stopwatch'));
const Coupon = lazy(()=>import('./pages/apps/Coupon'));
const Toss = lazy(()=>import('./pages/apps/Toss'));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/admin/Dashboard' element={<Dashboard/>}/>
        <Route path='/admin/product' element={<Products/>}/>
        <Route path='/admin/customer' element={<Customers/>}/>
        <Route path='/admin/transaction' element={<Transaction/>}/>
         
        {/*Charts*/}
        <Route path='/admin/chart/bar' element={<BarCharts/>}/> 
        <Route path='/admin/chart/pie' element={<PieCharts/>}/> 
        <Route path='/admin/chart/line' element={<LineCharts/>}/>
        {/*Apps*/}
        <Route path='/admin/app/stopwatch' element={<Stopwatch/>}/>
        <Route path='/admin/app/coupon' element={<Coupon/>}/>
        <Route path='/admin/app/toss' element={<Toss/>}/>
        {/*Management
         the new route must be up as if not the :id would be rendered not new value of id would be taken as new
        */}

        <Route path='/admin/product/new' element={<NewProduct/>}/>
        <Route path='/admin/product/:id' element={<ProductManagement/>}/>
        <Route path='/admin/transaction/:id' element={<TransactionManagement/>}/>
        

      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
