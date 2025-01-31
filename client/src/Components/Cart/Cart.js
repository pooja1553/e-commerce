import React, { useState } from 'react';
import './Cart.css';
 import { MdDeleteForever } from "react-icons/md";

function Cart({ cartItems, deleteItem }) {
  const [counts, setCounts] = useState(cartItems.map(() => 1));

  const handleIncrease = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrease = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  const handleDelete = (index) => {
    const newCounts = counts.filter((_, i) => i !== index);
    setCounts(newCounts);
    deleteItem(index);
  };

  return (
    <div className="cart">
      <div className="cart1">
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <h2>Cart is empty</h2>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={item.id || index}>
                  <div className="cart-item">
                    <div>
                      <img src={item.src} alt="" />
                    </div>
                    <div className="cart-item-details">
                     <div className='cart-item-details'>
                      <p>Price: {item.price}</p>
                      <select name="size">
                        <option value="FreeSize">Free Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                      </div>
                      <div className="btn1">
                        <div className="btn1">
                        <button onClick={() => handleDecrease(index)}>-</button>
                        <span>{counts[index]}</span>
                        <button onClick={() => handleIncrease(index)}>+</button>
                      </div>
                      <MdDeleteForever className="delete" onClick={() => handleDelete(index)} />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-table">
              <div className="cart-table1">
                <h3>Product Details</h3>
                <table className="cart-summary">
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={item.id || index}>
                        <td>{item.id}</td>
                        <td>{item.details.type}</td>
                        <td>{counts[index]}</td>
                        <td>{item.price * counts[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3">
                        <strong>Grand Total</strong>
                      </td>
                      <td>
                        <strong>
                          {cartItems.reduce(
                            (total, item, index) => total + item.price * counts[index],
                            0
                          )}
                        </strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="btn-cart">
              <button className="btn-cart1">Order</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
