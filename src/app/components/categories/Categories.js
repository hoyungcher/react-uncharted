import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import CategoryCard from './CategoryCard';
import classes from './Categories.module.css'

const Categories = (props) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    //Get all categories from api
    //Update categories in our state
    axios.get('http://localhost:3001/api/v1/categories.json')
    .then(response => {
      setCategories(response.data.data)
    })
    .catch(response => console.log(response))
  }, [categories.length])


  const categoriesList = categories.map( category => {
    return(<CategoryCard
            key={category.attributes.slug}
            name={category.attributes.name}
            imageURL={category.attributes.image_url}
            slug={category.attributes.slug}
          />)
  })

  return (
    <div className={classes.OuterContainer}>
      <Navbar loggedInStatus={props.loggedInStatus} userData={props.userData} />
      <div>
        <h2 className={classes.Font}>Categories</h2>
        <h3 className={classes.Font}>Click on a category to follow your interests.</h3>
        <div className={classes.CategoriesList}>{categoriesList}</div>
      </div>
    </div>
  )
}

export default Categories
