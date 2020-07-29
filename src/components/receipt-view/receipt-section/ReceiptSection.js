import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography, Divider, Box } from '@material-ui/core';
import ReceiptList from './ReceiptList';
import ImpactResult from './ImpactResult';

// Styles
import styles from '../styles/receipt-section.module.css';

// Variables
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const ReceiptSection = ({ cartState }) => {
  const getDate = () => {
    const d = new Date();
    return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  return (
    <div className={styles.receiptSectionBox}>
      <Box className={styles.box}>
        <Grid container justify="space-around" className={styles.receiptBox}>
          <Grid item sm={12} spacing={2} className={styles.receiptHeaderBox}>
            <Typography align="center" variant="h3" gutterBottom>
              Impact Receipt
            </Typography>
            <Typography align="center" variant="h5" gutterBottom>
              EcoCart - {getDate()}
            </Typography>
          </Grid>

          <Grid sm={12} item>
            <Divider variant="middle" />
          </Grid>

          <Grid item sm={12} className={styles.receiptListBox}>
            <ReceiptList cartState={cartState} />
          </Grid>

          <Grid sm={12} item>
            <Divider variant="middle" />
          </Grid>

          <Grid item sm={12} className={styles.impactResultBox}>
            <ImpactResult cartState={cartState} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

ReceiptSection.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.number),
};

ReceiptSection.defaultProps = {};

export default ReceiptSection;
