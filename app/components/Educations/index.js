/**
 *
 * Educations
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import messages from './messages';

function Educations(props) {
  const { educations } = props;
  return (
    <div>
      {educations.map(education => {
        const gradDate = new Date(education.graduation_date);
        const gradStr = `${gradDate.getFullYear()}-${gradDate.getMonth() + 1}`;
        return (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
            key={education.facility_name}
          >
            <Grid item xs={2}>
              <Typography>{gradStr}</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography>{education.facility_name}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {education.title}
                {education.branch ? `, ${education.branch}` : ''}
              </Typography>
              {education.thesis ? (
                <Link color="textPrimary" href={education.thesis}>
                  <FormattedMessage {...messages.thesis} />
                </Link>
              ) : (
                ''
              )}
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

Educations.propTypes = {
  educations: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

export default Educations;
