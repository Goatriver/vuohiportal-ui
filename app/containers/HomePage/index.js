/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import messages from './messages';
import useStyles from './styles';
import SocialsBar from '../../components/SocialsBar';
import { makeSelectSocials } from './selectors';
import { loadSocials } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'homePage';

function HomePage(props) {
  const { socials, getSocials } = props;
  const classes = useStyles();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    getSocials();
  }, []);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Goatriver.fi</title>
        <meta name="description" content="Pasi Vuohijokis Portfolio page" />
      </Helmet>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography align="center" variant="h1" className={classes.title}>
            <FormattedMessage {...messages.fullName} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h5" className={classes.desc}>
            <FormattedMessage {...messages.descriptionResponsive} />
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} />
        <Grid item md={4} xs={12}>
          <SocialsBar socials={socials} />
        </Grid>
        <Grid item md={4} xs={12} />
      </Grid>
    </div>
  );
}

HomePage.propTypes = {
  socials: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  getSocials: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  socials: makeSelectSocials(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getSocials: () => dispatch(loadSocials()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
// TODO: Buildaa -> Hostaa -> saa työtarjouksia
