/**
 *
 * HomePageCard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PaperTransparent from '../PaperTransparent';

function HomePageCard(props) {
  const { children } = props;
  return <PaperTransparent>{children}</PaperTransparent>;
}

HomePageCard.propTypes = {
  children: PropTypes.node,
};

export default memo(HomePageCard);
