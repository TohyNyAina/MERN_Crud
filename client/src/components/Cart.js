import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css";

const Cart = ({list, setList, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let total = 0;
        list.map((elment)=>(
            total += elment.amount * elment.prix
        ))
        setPrice(total);
    }

    const handleRemove = (id) =>{
        const arr = list.filter((elment)=>elment.id !== id);
        setList(arr);
    }
/* useeff */
    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        {
            list?.map((elment)=>(
                <div className="cart_box" key={elment.id}>
                    <div className="cart_img">
                        <img src={elment.photo} />
                        <p>{elment.nom}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(elment, +1)}> + </button>
                        <button>{elment.amount}</button>
                        <button onClick={()=>handleChange(elment, -1)}> - </button>
                    </div>
                    <div>
                        <span>{elment.prix}</span>
                        <button onClick={()=>handleRemove(elment.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Prix</span>
            <span>{price} Ariary</span>
            <button onClick={()=>handleRemove()} >Reinitialiser</button>
        </div>
    </article>
  )
}

export default Cart