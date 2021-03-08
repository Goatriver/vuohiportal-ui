/**
 *
 * Cv
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Box, Divider } from '@material-ui/core';
import {
  makeSelectPublicInfo,
  makeSelectProfessionalSkills,
  makeSelectLanguageSkills,
  makeSelectOtherInterests,
  makeSelectEducations,
  makeSelectExperiences,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import useStyles from './styles';
import PersonalInfo from '../../components/PersonalInfo';
import {
  loadPublicInfo,
  loadProfessionalSkills,
  loadLanguageSkills,
  loadOtherInterests,
  loadEducations,
  loadExperience,
} from './actions';
import Skills from '../../components/Skills';
import CvSideBarElement from '../../components/CvSideBarElement';
import Educations from '../../components/Educations';
import Experience from '../../components/Experience';
import LoadingLoading from '../../components/LoadingLoading';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export function Cv(props) {
  const {
    locale,
    publicInfo,
    getPublicInfo,
    professionalSkills,
    getProfessionalSkills,
    getLanguageSkills,
    languageSkills,
    otherInterests,
    getOtherInterests,
    getEducations,
    educations,
    getExperiences,
    experiences,
  } = props;
  const classes = useStyles();
  useInjectReducer({ key: 'cv', reducer });
  useInjectSaga({ key: 'cv', saga });
  useEffect(() => {
    getPublicInfo(locale);
    getProfessionalSkills();
    getLanguageSkills();
    getOtherInterests(locale);
    getEducations(locale);
    getExperiences(locale);
  }, []);
  return (
    <div className={classes.root}>
      <Helmet>
        <title>Goatriver.fi - Curriculum Vitae</title>
        <meta name="description" content="Pasi Vuohijokis Curriculum Vitae" />
      </Helmet>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box className={classes.header}>
              {publicInfo ? (
                <div>
                  <Typography variant="h3">{publicInfo.name}</Typography>
                  <Typography variant="subtitle1">
                    {publicInfo.profession}
                  </Typography>
                </div>
              ) : (
                <LoadingLoading />
              )}
            </Box>
            <Divider />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Box className={classes.descriptionArea}>
              {/* Description area */}
              {publicInfo ? (
                <div>
                  <Typography className={classes.descText}>
                    {publicInfo.description}
                  </Typography>
                  <br />
                </div>
              ) : (
                <LoadingLoading />
              )}

              <CvSideBarElement
                title={<FormattedMessage {...messages.education} />}
              >
                {educations ? (
                  <Educations educations={educations} />
                ) : (
                  <LoadingLoading />
                )}
              </CvSideBarElement>
              <CvSideBarElement
                title={<FormattedMessage {...messages.experience} />}
              >
                {experiences ? (
                  <Experience experiences={experiences} />
                ) : (
                  <LoadingLoading />
                )}
              </CvSideBarElement>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Box className={classes.personal}>
              {/* Personalinfo / smaller area */}

              <PersonalInfo info={publicInfo} />
              <Skills
                title={<FormattedMessage {...messages.proSkills} />}
                skills={professionalSkills}
              />
              <Skills
                title={<FormattedMessage {...messages.langSkills} />}
                skills={languageSkills}
              />
              {otherInterests ? (
                <CvSideBarElement
                  title={<FormattedMessage {...messages.otherInterests} />}
                >
                  {otherInterests.map(interest => (
                    <Typography key={interest.name} variant="subtitle2">
                      {interest.name}
                    </Typography>
                  ))}
                </CvSideBarElement>
              ) : (
                <LoadingLoading />
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Cv.propTypes = {
  publicInfo: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  professionalSkills: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  languageSkills: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  otherInterests: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  getPublicInfo: PropTypes.func,
  getProfessionalSkills: PropTypes.func,
  getLanguageSkills: PropTypes.func,
  getOtherInterests: PropTypes.func,
  educations: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  experiences: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  getEducations: PropTypes.func,
  getExperiences: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  publicInfo: makeSelectPublicInfo(),
  professionalSkills: makeSelectProfessionalSkills(),
  languageSkills: makeSelectLanguageSkills(),
  otherInterests: makeSelectOtherInterests(),
  educations: makeSelectEducations(),
  experiences: makeSelectExperiences(),
  locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPublicInfo: locale => dispatch(loadPublicInfo(locale)),
    getProfessionalSkills: () => dispatch(loadProfessionalSkills()),
    getLanguageSkills: () => dispatch(loadLanguageSkills()),
    getOtherInterests: locale => dispatch(loadOtherInterests(locale)),
    getEducations: locale => dispatch(loadEducations(locale)),
    getExperiences: locale => dispatch(loadExperience(locale)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Cv);
