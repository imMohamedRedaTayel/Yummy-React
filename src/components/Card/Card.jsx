import React from 'react'
import style from './card.module.css'
import cardImg from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Card = ({ mealInfo }) => {
    return <>
        <div className={`col-md-3`}>
            <Link to={`/details/${mealInfo.idMeal}`} >
                <div
                    className={`${style.inner} position-relative rounded-3 overflow-hidden`}
                >
                    <img src={mealInfo.strMealThumb} className="w-100" alt='' />
                    <div className="layer w-100 h-100 position-absolute start-0 d-flex align-items-center p-3">
                        <h2>{mealInfo.strMeal} </h2>
                    </div>
                </div>
            </Link>
        </div>
    </>
}

export default Card