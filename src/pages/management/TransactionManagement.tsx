import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"
import { OrderItemType, OrderType } from "../../types"
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

  const orderItems: OrderItemType[]=[
    {
      name: "Puma Shoes",
      photo: img,
      _id: "asdsaasdas",
      quantity: 4,
      price: 2000,
    },
  ];
const TransactionManagement = () => {

  const [order,setOrder] = useState<OrderType>({
    name: "Abhishek Singh",
    address: "77 Black Street",
    city: "Neyword",
    state: "Nevada",
    country: "India",
    pincode: 2434341,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "asdnasjdhbn",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pincode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;
 
  const updateHander = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className='adminContainer'>
    <AdminSidebar/>
    <main className='productManagement'>
      <section style={{
            padding: "2rem",
          }}>
        <h2>Order Items</h2>
        {
           order.orderItems.map((i)=>(
            <ProductCard  
            name={i.name} 
            photo={i.photo} 
            price={i.price} 
            quantity={i.quantity} 
            _id = {i._id}  
            />
           ))
        }
      </section>
      <article className="shippingInfoCard">
        <h1>Order Info</h1>
        <h5>User Info</h5>
        <p>Name: {name}</p>
        <p>Address:  {`${address}, ${city}, ${state}, ${country} ${pincode}`}</p>
        <h5>Amount Info</h5>
        <p>Subtotal:{subtotal}</p>
        <p>ShippingCharges:{shippingCharges}</p>
        <p>Tax:{tax}</p>
        <p>DisCount:{discount}</p>
        <p>Total:{total}</p>
        <h5>Status Info</h5>
        <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
        <button onClick={updateHander}>Process Status</button>
      </article>
    </main>
    </div>
  )
}

const ProductCard = ({name,photo,price,quantity,_id}:OrderItemType)=>{
return (<div className="transactionProductCard">
  <img src={photo} alt={name} />
  <Link to={`/product/${_id}`}>{name}</Link>
  <span>${price} X {quantity} = ${price*quantity}</span>
</div>);
};

export default TransactionManagement