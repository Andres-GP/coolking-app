import React from 'react'
import search_icon from './images/search_icon.svg'

function Searchbar() {
    return <section className="searchbar-section">
      <div className="searchbar-section__container">
        <input className="searchbar-section__container__input" placeholder="Recipe Title, Ingredient" ></input>
        <img className="searchbar-section__container__input-icon" src={search_icon} alt="Logo de la conferencia"></img>   
      </div>
    </section>;
  }


export default Searchbar