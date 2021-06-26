import React from 'react'
import './mediaQueries.css'

function CommunityCookbooks() {
    return <section className="communityCookbooksSection">
         <div className="communityCookbooksSection__titleContainer">
            <strong className="communityCookbooksSection__titleContainer__text">Community Cookbooks</strong>
        </div>
        <div className="communityCookbooksSection__cardGenerator">
            <div className="communityCookbooksSection__cardGenerator__container">
                <img className="communituCookbooksSection__cardGenerator__container__backgroundimage" src=""/>
            </div>
            <div className="communityCookbooksSection__cardGenerator__cardDetails">
                <div className="communityCookbooksSection__cardGenerator__cardDetails__logo"></div>
                <div className="communityCookbooksSection__cardGenerator__cardDetails__title">
                    Contribute with a new Cookbook!
                </div>
                <div className="communityCookbooksSection__cardGenerator__cardDetails__description">Keep it easy...</div>
                <div className="communityCookbooksSection__cardGenerator__cardDetails__details">
                    <div className="communityCookbooksSection__cardGenerator__cardDetails__details__Views">Views</div>
                    <div className="communityCookbooksSection__cardGenerator__cardDetails__details__division"></div>
                    <div className="communityCookbooksSection__cardGenerator__cardDetails__details__Recipes">Recipes</div>
                </div>
            </div>
        </div>
    </section>
}


export default CommunityCookbooks;