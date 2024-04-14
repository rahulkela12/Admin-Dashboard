import {RiDashboardFill, RiShoppingBag3Fill,RiCoupon3Fill } from 'react-icons/ri';
import { Link, useLocation,Location } from 'react-router-dom';
import {IoIosPeople} from 'react-icons/io'
import {AiFillFileText} from 'react-icons/ai'
import { IconType } from 'react-icons';
import {FaChartPie,FaChartLine, FaChartBar,FaStopwatch,FaGamepad} from 'react-icons/fa'

const AdminSidebar = () => {
    const location = useLocation();
  return (
    <aside>
        <h2>Logo.</h2>
      <DivOne location={location}/>
      <DivTwo location={location}/>
      <DivThree location={location}/>
    </aside>
  )
}

const DivOne = ({location}:{location:Location})=>(
    <div>
    <h5>Dashboard</h5>
    <ul>
        <Li url = "/admin/Dashboard" text = "Dashboard" location={location} Icon={RiDashboardFill} />
        <Li url = "/admin/products" text = " Products" location={location} Icon={RiShoppingBag3Fill} />
        <Li url = "/admin/customers" text = "Customers" location={location} Icon={IoIosPeople} />
        <Li url = "/admin/transaction" text = "Transactions" location={location} Icon={AiFillFileText} />
    </ul>
    </div>
);

const DivTwo = ({location}:{location:Location})=>(
    <div>
    <h5>Charts</h5>
    <ul>
        <Li url = "/admin/chart/bar" text = "Bar" location={location} Icon={FaChartBar} />
        <Li url = "/admin/chart/pie" text = " Pie" location={location} Icon={FaChartPie} />
        <Li url = "/admin/chart/line" text = "Line" location={location} Icon={FaChartLine} />
    </ul>
    </div>
);

const DivThree = ({location}:{location:Location})=>(
    <div>
    <h5>Apps</h5>
    <ul>
        <Li url = "/admin/app/stopwatch" text = "Stopwatch" location={location} Icon={FaStopwatch} />
        <Li url = "/admin/app/coupon" text = "Coupon" location={location} Icon={RiCoupon3Fill} />
        <Li url = "/admin/app/toss" text = "Toss" location={location} Icon={FaGamepad} />
    </ul>
    </div>
);

interface LiProps{
  url:string,
  text:string,
  location:Location,
  Icon:IconType
}

const Li = ({url,text,location,Icon}:LiProps)=>(
    <li style={{
        backgroundColor:location.pathname.includes(url) ? "rgb(0,115,255,0.1)" : "white"
    }}>
        <Link to = {url} style={{
        color:location.pathname.includes(url) ? "rgb(0,115,255)" : "black"
    }}>
        <Icon/>  
         {text}
        </Link>
    </li>
)

export default AdminSidebar;