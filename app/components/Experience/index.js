/**
 *
 * Experience
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './styles';

function Experience(props) {
  const { experiences } = props;
  const classes = useStyles();
  return (
    <div>
      {experiences.map(experience => {
        const start = new Date(experience.start_date);
        const end = new Date(experience.end_date);
        const startStr = `${start.getFullYear()}-${start.getMonth() + 1}`;
        const endStr = `${end.getFullYear()}-${end.getMonth() + 1}`;
        return (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
            key={experience.corporate}
          >
            <Grid item xs={2}>
              <Typography
                className={classes.fromTo}
                variant="caption"
              >{`${startStr} - ${endStr}`}</Typography>
            </Grid>
            <Grid item xs={10}>
              {experience.link ? (
                <Link
                  variant="body1"
                  color="textPrimary"
                  href={experience.link}
                  target="_blank"
                >
                  {experience.corporate}
                </Link>
              ) : (
                <Typography>{experience.corporate}</Typography>
              )}

              <Typography variant="subtitle2" color="textSecondary">
                {experience.profession}
              </Typography>
              <Typography variant="body2">{experience.description}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

Experience.propTypes = {
  experiences: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

export default Experience;
