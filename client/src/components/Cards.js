import React from 'react';
import '../styles/cards.css'

const Cards = ({elment,item, handleClick}) => {
    const {nom, categorie, prix, photo} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={item.photo} alt="Image" />
        </div>
        <div className="details">
            <p>{item.nom}</p>
            <p>{item.categorie}</p>
            <p>Prix - {item.prix}Ariary</p>
            <button onClick={()=>handleClick(item)} >Ajouter</button>
        </div>
    </div>
  )
}

export default Cards