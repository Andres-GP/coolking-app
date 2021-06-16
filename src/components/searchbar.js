import React from 'react'
import search_icon from './images/search_icon.svg'
import './mediaQueries.css'

function Searchbar() {
    return <section className="searchbarSection">
      <div className="searchbarSection__container">
        <input className="searchbarSection__container__input" placeholder="Recipe Title, Ingredient" ></input>
        <img className="searchbarSection__container__inputIcon" src={search_icon} alt="Logo de la conferencia"></img>   
      </div>
    </section>
  ;
  }


export default Searchbar