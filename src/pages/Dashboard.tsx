import React from 'react'
import AdminSidebar from '../components/AdminSidebar';
import { BsSearch } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import userpic from '../assets/userpic.png'
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import data from "../assets/data.json";
const Dashboard = () => {
  return (
    <div className='adminContainer'>
    <AdminSidebar/>
    <main className='dashboard'>
      <div className="bar">
       <BsSearch/>
       <input type="text" placeholder='search for data,users,docs'></input>
       <FaRegBell/>
       <img src={userpic} alt="userpic"/>
      </div>
      <section className="widgetContainer">
      <WidgetItem
            percentage={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percentage={-14}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />
          <WidgetItem
            percentage={80}
            value={23000}
            heading="Transactions"
            color="rgb(255 196 0)"
          />
          <WidgetItem
            percentage={30}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          />
      </section>
      <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            {/* Grapph here */}
          </div>

          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
            {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4},${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>

    </main>
    </div>
  );
}

interface widgetProp{
  heading:string,
  value:number,
  percentage:number,
  color:string,
  amount?:boolean
}

const WidgetItem = ({
  heading,value,percentage,color,amount
}:widgetProp)=>(<article className='widget'>
  <div className="widgetInfo">
  <p>{heading}</p>
  <h4>{amount ? `$${value}` : value}</h4>
  {
  percentage>0 ? <span className="green"> <HiTrendingUp/> +{percentage}% </span> 
  : <span className='red'> <HiTrendingDown/> {percentage}% </span> } 
  </div>
  <div className="widgetCircle" style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percentage) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}>
    <span 
    color={color}>{percentage}%</span>
  </div>
</article>);


interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard
