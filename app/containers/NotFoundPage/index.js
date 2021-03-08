/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@material-ui/core';
import NotInterestedSharpIcon from '@material-ui/icons/NotInterestedSharp';

import PaperTransparent from '../../components/PaperTransparent';
import messages from './messages';
import useStyles from './styles';

export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PaperTransparent>
        <NotInterestedSharpIcon className={classes.icon} />
        <Typography align="center" variant="h3">
          <FormattedMessage {...messages.notFound} />
        </Typography>
      </PaperTransparent>
    </div>
  );
}
