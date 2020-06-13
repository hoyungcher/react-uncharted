import React, { useState, useEffect } from 'react';
import classes from './CategoryCard.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';


const CategoryCard = (props) => {
  return (
    <div className={classes.Card} >
      <Link to={'./' + props.slug}>
        <img className={classes.Image} alt={props.name} src={props.imageURL} />
        <p className={classes.Name}>{props.name}</p>
      </Link>
    </div>
  )
}

export default CategoryCard
