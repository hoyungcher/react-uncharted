import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import classes from './Category.module.css'

const Category = (props) => {
  const [ category, setCategory ] = useState({ attributes: { themes: []}})

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `http://localhost:3001/api/v1/categories/${slug}.json`
    axios.get(url)
    .then( response => setCategory(response.data.data))
    .catch( response => console.log(response))
  }, [])

  const themesList = category.attributes.themes.map( theme => {
    return(
    <li key={theme.slug} >{theme.name}</li>
    )
  })


  return (
    <div>
      <Navbar loggedInStatus={props.loggedInStatus} userData={props.userData} />
      <div>
        <h2 className={classes.Font}>{category.attributes.name}</h2>
        <ul>
          <h3 className={classes.Font}>{themesList}</h3>
        </ul>
      </div>
    </div>
  )


}

export default Category
