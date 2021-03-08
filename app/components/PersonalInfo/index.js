/**
 *
 * PersonalInfo
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CvSideBarElement from '../CvSideBarElement';
import LoadingLoading from '../LoadingLoading';

function PersonalInfo(props) {
  const { info } = props;

  if (info) {
    const birthyear = new Date(info.birthdate).getFullYear();
    return (
      <CvSideBarElement title={<FormattedMessage {...messages.personalInfo} />}>
        <Typography variant="subtitle2" color="textSecondary">
          <FormattedMessage {...messages.location} />
        </Typography>
        <Typography variant="caption">{info.location}</Typography>
        <br />
        <br />
        <Typography variant="subtitle2" color="textSecondary">
          <FormattedMessage {...messages.yearOfBirth} />
        </Typography>
        <Typography variant="caption">{birthyear}</Typography>
        <br />
        <br />
        <Typography variant="subtitle2" color="textSecondary">
          <FormattedMessage {...messages.email} />
        </Typography>
        <Typography variant="caption">
          {info.email.replace('@', '(at)')}
        </Typography>
      </CvSideBarElement>
    );
  }
  return <LoadingLoading />;
}

PersonalInfo.propTypes = {
  info: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default memo(PersonalInfo);
