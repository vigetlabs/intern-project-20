// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import GroceryItem from './GroceryItem';

// Styles
import styles from '../styles/category-row.module.css';

const CategoryRow = ({ category }) => {
  // REFACTOR: Using fake data right now
  const groceryItems = [1, 2, 3, 4, 5, 6].map((index) => (
    <Grid item>
      <GroceryItem key={index} />
    </Grid>
  ));
  return (
    <div>
      <h2>{category}</h2>
      <div className={styles.row}>{groceryItems}</div>
    </div>
  );
};

CategoryRow.propTypes = {};

CategoryRow.defaultProps = {};

export default CategoryRow;