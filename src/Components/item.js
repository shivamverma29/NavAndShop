import React, { useState } from "react";
import image from "../images/item.png";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import "./CSS/Item.css";

const Item = (props) => {
  const Addbtn = (event) => {
    // console.log(document.getElementById(event.target.id))
    document.getElementById(event.target.id).style.display = "none";
    document.getElementById(`a${event.target.id}`).style.display = "block";
    props.cartItems[props.data.id] += 1;
    props.setVal(props.val + 1);
    // console.log(cartItems)
  };
  const addVal = (event) => {
    props.cartItems[props.data.id] += 1;
    props.setVal(props.val + 1);
    // console.log(cartItems)
  };
  const subVal = (event) => {
    props.setVal(props.val - 1);
    props.cartItems[props.data.id] -= 1;
    // console.log(cartItems)
  };
  return (
    <div class="card-wrapper">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.data.name}</h5>
          <p class="card-text">Price:{props.data.price}</p>
          <p class="card-text">Gender:{props.data.Gender}</p>
          <p class="card-text">Colour:{props.data.Colour}</p>
          <button
            id={`addcart${props.data.id}`}
            className="btn"
            onClick={Addbtn}
          >
            Add to cart
          </button>
          <div id={`aaddcart${props.data.id}`} style={{ display: "none" }}>
            <button className="btn btn-primary">
              <AiOutlineMinus onClick={subVal} />
            </button>
            {props.cartItems[props.data.id]}
            <button className="btn btn-primary">
              <AiOutlinePlus onClick={addVal} />
            </button>
          </div>
        </div>
        {/* <a href="#" class="btn btn-primary">AR</a> */}
      </div>
    </div>
  );
};
// export {cartItems}
export default Item;
