/**
 *
 * Rater
 *
 */

import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
// import styled from 'styled-components';

function Rater(props) {
  const classes = useStyles();
  const { stars, title } = props;
  const starItems = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    starItems.push(stars > i);
  }

  return (
    <span className={classes.root}>
      <Typography variant="subtitle2" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.stars}>
        {starItems.map((val, index) =>
          val ? (
            // eslint-disable-next-line react/no-array-index-key
            <StarIcon fontSize="small" key={index} />
          ) : (
            // eslint-disable-next-line react/no-array-index-key
            <StarOutlineIcon fontSize="small" key={index} />
          ),
        )}
      </Typography>
    </span>
  );
}

Rater.propTypes = {
  stars: PropTypes.number,
  title: PropTypes.string,
};

export default Rater;
