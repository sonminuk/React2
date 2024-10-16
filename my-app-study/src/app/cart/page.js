"use client"

import { useState } from "react";

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    );
}

function CartItem() {
    const [quantity, setQuantity] = useState(1);
    
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    return (
        <div className="cart-item"> 
            <p>상품명</p>
            <p>$40</p>
            <div className="quantity-control">
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
            </div>
        </div>
    );
}