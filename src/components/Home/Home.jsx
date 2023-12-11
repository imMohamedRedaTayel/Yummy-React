import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import LodingScreen from '../LodingScreen/LodingScreen'

const Home = () => {

  const [meals, setMeals] = useState( null )

  async function getAllData(){
    try {
      const { data } = await axios.get( `https://www.themealdb.com/api/json/v1/1/search.php?s=` )
      console.log( data );
      setMeals( data.meals )
    } catch (error) {
      console.log( 'Error ' , error );
    }
  } 

  useEffect(() => {
    getAllData()
  }, [])
  
  

  return <>
  { meals ?   <div className="row g-3 ">
    { meals.map( ( mealInfo , idx ) => { return <Card mealInfo={ mealInfo } key={ idx } />  } ) }
  </div> : <LodingScreen/> }

  </>
}

export default Home