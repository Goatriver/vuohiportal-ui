/**
 *
 * HeaderText
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function HeaderText(props) {
  const { route } = props;
  let message = '';
  switch (route) {
    case '/':
      message = <FormattedMessage {...messages.home} />;
      break;
    case '/cv':
      message = <FormattedMessage {...messages.cv} />;
      break;
    default:
      message = <FormattedMessage {...messages.notFound} />;
      break;
  }

  return message;
}

HeaderText.propTypes = {
  route: PropTypes.string,
};

export default memo(HeaderText);
