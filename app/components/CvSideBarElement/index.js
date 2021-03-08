/**
 *
 * CvSideBarElement
 *
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

function CvSideBarElement(props) {
  const { title, children } = props;
  return (
    <div>
      <Typography variant="button" color="textSecondary">
        {title}
      </Typography>
      <Divider />
      <br />
      {children}
      <br />
      <br />
    </div>
  );
}

CvSideBarElement.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
};

export default CvSideBarElement;
