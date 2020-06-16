import React from 'react';
import classes from './CategoryCard.module.css'
import { Link } from 'react-router-dom';


const CategoryCard = (props) => {
  return (
    <div className={classes.Card} >
      <Link to={'./categories/' + props.slug}>
        <img className={classes.Image} alt={props.name} src={props.imageURL} />
        <p className={classes.Name}>{props.name}</p>
      </Link>
    </div>
  )
}

export default CategoryCard
