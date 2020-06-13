import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';

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
    return(<li key={category.attributes.slug}>{category.attributes.name}</li>)
  })

  return (
    <div>
      <Navbar loggedInStatus={props.loggedInStatus} userData={props.userData} />
      <ul>{categoriesList}</ul>
    </div>
  )
}

export default Categories
