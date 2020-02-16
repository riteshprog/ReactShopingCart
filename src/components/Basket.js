import React, { Component } from 'react'
import util from '../util';

export default class Basket extends Component {

  handleAddItem = (e, item) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === item.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...item, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
 
  };




  render() {
    const { cartItems } = this.props;

   
    return (
      <div className="alert alert-info mr-2">
        
       {cartItems.length === 0 ? "Basket is empty" : <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 && <div>
                  <ul>{
                    cartItems.map(item => 
                      <li key={item.id}>
                        <b>{item.title}</b> x {item.count} = {item.price * item.count}
                        <br />
                        
                        <button className="btn btn-danger mr-2" onClick={(e) => this.props.handleRemoveFromCart(e, item)}>x</button>
      

                      </li>)
                      }
                  </ul>
                  <span className="mr-2">Total: {util.formatCurrency(cartItems.reduce((a, c) => a + c.price*c.count, 0))}&#160;&#160;&#160;&#160;</span>
                  <button className="btn btn-primary" onClick={() => alert("Checkout Needs to Implement ....")}>CheckOut</button>

                  </div>}
         </div>
      
    )
  }
}
